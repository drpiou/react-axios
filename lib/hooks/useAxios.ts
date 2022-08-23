/* eslint-disable @typescript-eslint/no-explicit-any,@typescript-eslint/no-unsafe-argument */

import { AxiosRequest, AxiosRequestAbort, AxiosRequestResponse } from '@drpiou/axios';
import { useIsMounted, useOnUnmount } from '@drpiou/react-utils';
import map from 'lodash/map';
import mapValues from 'lodash/mapValues';
import uniqueId from 'lodash/uniqueId';
import { useMemo, useRef } from 'react';

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
    : never;
};

export type UseAxiosList = Record<string, (...args: any[]) => AxiosRequest>;

const DEFAULT_OPTIONS: UseAxiosApiOptions = {
  autoAbort: false,
};

const useAxios = <A extends UseAxiosList, AO = unknown, BD = unknown>(
  api: A,
  options?: UseAxiosOptions<AO, BD>,
): UseAxios<A, AO> => {
  const controllers = useRef<{ [key: string]: AxiosRequestAbort }>({});

  const isMounted = useIsMounted();

  const requests = useMemo(() => {
    return mapValues(api, (apiRequest) => {
      return (...args: any[]): UseAxiosRequest<any, any, any, AO> => {
        const request = apiRequest(...args);

        const start = async (apiOptions?: UseAxiosApiOptions<AO>): Promise<AxiosRequestResponse> => {
          const apiId = uniqueId('api:');

          const useApiOptions = { ...DEFAULT_OPTIONS, ...apiOptions } as UseAxiosApiOptions<AO>;

          let before: BD | undefined = undefined;

          if (typeof options?.onBefore === 'function') {
            before = await options?.onBefore(useApiOptions);
          }

          if (useApiOptions.autoAbort) {
            if (isMounted.current) {
              controllers.current[apiId] = request.abort;
            }
          }

          const response = await request.start();

          delete controllers.current[apiId];

          if (typeof options?.onAfter === 'function') {
            await options?.onAfter(response, before, useApiOptions);
          }

          return response;
        };

        return {
          start,
          abort: request.abort,
        };
      };
    });
  }, [api, isMounted, options]);

  useOnUnmount(() => {
    map(controllers.current, (abort) => {
      abort();
    });
  });

  return requests as UseAxios<A, AO>;
};

export default useAxios;
