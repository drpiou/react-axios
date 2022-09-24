/* eslint-disable @typescript-eslint/no-explicit-any,@typescript-eslint/no-unsafe-argument */

import { AxiosRequest, AxiosRequestAbort, AxiosRequestResponse } from '@drpiou/axios';
import { useIsMounted, useOnUnmount } from '@drpiou/react-utils';
import map from 'lodash/map';
import mapValues from 'lodash/mapValues';
import uniqueId from 'lodash/uniqueId';
import { useCallback, useMemo, useRef } from 'react';

export type UseAxiosOptions<AO = unknown, BD = unknown, SD = any, ED = any, CD = any> = {
  onAfter?: UseAxiosCallbackAfter<AO, BD, SD, ED, CD>;
  onBefore?: UseAxiosCallbackBefore<AO, BD>;
};

export type UseAxiosApiOptions<AO = unknown> = AO & {
  autoAbort?: boolean;
};

export type UseAxiosCallbackAfter<AO = unknown, BD = unknown, SD = any, ED = any, CD = any> = (
  response: AxiosRequestResponse<SD, ED, CD>,
  before: BD | undefined,
  apiOptions?: UseAxiosApiOptions<AO>,
) => void | Promise<void>;

export type UseAxiosCallbackBefore<AO = unknown, BD = unknown> = (apiOptions?: UseAxiosApiOptions<AO>) => BD | Promise<BD>;

export type UseAxiosRequest<AO = unknown, SD = any, ED = any, CD = any> = {
  start: (apiOptions?: UseAxiosApiOptions<AO>) => Promise<AxiosRequestResponse<SD, ED, CD>>;
  abort: AxiosRequestAbort;
};

export type UseAxios<A, AO = unknown> = {
  [K in keyof A]: A[K] extends (...args: infer P) => AxiosRequest<infer SD, infer ED, infer CD>
    ? (...args: P) => UseAxiosRequest<AO, SD, ED, CD>
    : A[K] extends (...args: infer P) => Promise<AxiosRequest<infer SD, infer ED, infer CD>>
    ? (...args: P) => Promise<UseAxiosRequest<AO, SD, ED, CD>>
    : never;
};

export type UseAxiosList = Record<string, (...args: any[]) => AxiosRequest | Promise<AxiosRequest>>;

const DEFAULT_OPTIONS: UseAxiosApiOptions = {
  autoAbort: false,
};

const useAxios = <A extends UseAxiosList, AO = unknown, BD = unknown>(
  api: A,
  options?: UseAxiosOptions<AO, BD>,
): UseAxios<A, AO> => {
  const controllers = useRef<{ [key: string]: AxiosRequestAbort }>({});

  const isMounted = useIsMounted();

  const getRequest = useCallback(
    (request: AxiosRequest): UseAxiosRequest<any, any, any, AO> => {
      const apiId = uniqueId('api:');

      const start = async (apiOptions?: UseAxiosApiOptions<AO>): Promise<AxiosRequestResponse> => {
        const useApiOptions = { ...DEFAULT_OPTIONS, ...apiOptions } as UseAxiosApiOptions<AO>;

        let before: BD | undefined = undefined;

        if (typeof options?.onBefore === 'function') {
          before = await options?.onBefore(useApiOptions);
        }

        return new Promise((resolve, reject) => {
          if (useApiOptions.autoAbort) {
            controllers.current[apiId] = request.abort;
          }

          request
            .start()
            .then(async (res) => {
              delete controllers.current[apiId];

              if (typeof options?.onAfter === 'function') {
                await options?.onAfter(res, before, useApiOptions);
              }

              resolve(res);
            })
            .catch((error) => {
              delete controllers.current[apiId];

              reject(error);
            });

          if (useApiOptions.autoAbort && !isMounted.current) {
            request.abort();
          }
        });
      };

      return {
        start,
        abort: request.abort,
      };
    },
    [isMounted, options],
  );

  const requests = useMemo(() => {
    return mapValues(api, (apiRequest) => {
      return (...args: any[]): UseAxiosRequest<any, any, any, AO> | Promise<UseAxiosRequest<any, any, any, AO>> => {
        const request = apiRequest(...args);

        if (request instanceof Promise) {
          return new Promise((resolve, reject) => {
            request.then((req) => resolve(getRequest(req))).catch(reject);
          });
        }

        return getRequest(request);
      };
    });
  }, [api, getRequest]);

  useOnUnmount(() => {
    map(controllers.current, (abort) => {
      abort();
    });
  });

  return requests as UseAxios<A, AO>;
};

export default useAxios;
