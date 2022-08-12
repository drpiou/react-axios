/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  AxiosConfig,
  AxiosOptions,
  AxiosRequest,
  AxiosRequestAbort,
  AxiosRequestData,
  AxiosRequestDataOptional,
  AxiosRequestDataVoid,
  AxiosResponseRequest,
} from '@drpiou/axios';
import { useIsMounted, useOnUnmount } from '@drpiou/react-utils';
import { withoutProperties } from '@drpiou/ts-utils';
import map from 'lodash/map';
import mapValues from 'lodash/mapValues';
import uniqueId from 'lodash/uniqueId';
import { useMemo, useRef } from 'react';

export type UseAxiosOptions<AO = unknown, BD = unknown, SD = any, ED = any, CD = any> = {
  onAfter?: UseAxiosCallbackAfter<AO, BD, SD, ED, CD>;
  onBefore?: UseAxiosCallbackBefore<AO, BD, SD, ED>;
};

export type UseAxiosRequestOptions<SD = any, ED = any> = AxiosOptions<SD, ED> & {
  autoAbort?: boolean;
};

export type UseAxiosCallbackAfter<AO = unknown, BD = unknown, SD = any, ED = any, CD = any> = (
  response: AxiosResponseRequest<SD, ED, CD>,
  before: BD | undefined,
  apiOptions?: AO,
  configOptions?: UseAxiosRequestOptions<SD, ED>,
) => void | Promise<void>;

export type UseAxiosCallbackBefore<AO = unknown, BD = unknown, SD = any, ED = any> = (
  apiOptions?: AO,
  configOptions?: UseAxiosRequestOptions<SD, ED>,
) => BD | Promise<BD>;

export type UseAxiosRequest<CD = any, SD = any, ED = any> =
  | AxiosRequestData<CD, SD, ED>
  | AxiosRequestDataOptional<CD, SD, ED>
  | AxiosRequestDataVoid<SD, ED>;

export type UseAxiosRequestData<SD = any, ED = any, CD = any, AO = unknown> = (
  data: CD,
  apiOptions?: AO,
  configOptions?: UseAxiosRequestOptions<SD, ED>,
) => Promise<AxiosResponseRequest<SD, ED, CD> | undefined>;

export type UseAxiosRequestDataOptional<SD = any, ED = any, CD = any, AO = unknown> = (
  data?: CD | null,
  apiOptions?: AO,
  configOptions?: UseAxiosRequestOptions<SD, ED>,
) => Promise<AxiosResponseRequest<SD, ED, CD> | undefined>;

export type UseAxiosRequestDataVoid<SD = any, ED = any, AO = unknown> = (
  data?: null,
  apiOptions?: AO,
  configOptions?: UseAxiosRequestOptions<SD, ED>,
) => Promise<AxiosResponseRequest<SD, ED> | undefined>;

export type UseAxios<A, AO = unknown> = {
  [K in keyof A]: A[K] extends AxiosRequestDataVoid<infer SD, infer ED>
    ? UseAxiosRequestDataVoid<SD, ED, AO>
    : A[K] extends AxiosRequestDataOptional<infer CD, infer SD, infer ED>
    ? UseAxiosRequestDataOptional<SD, ED, CD, AO>
    : A[K] extends AxiosRequestData<infer CD, infer SD, infer ED>
    ? UseAxiosRequestData<SD, ED, CD, AO>
    : A[K] extends (config: AxiosConfig, options?: AxiosOptions | undefined) => AxiosRequest
    ? <SD, ED, CD>(data: AxiosConfig<CD>, apiOptions?: AO, options?: AxiosOptions<SD, ED>) => AxiosRequest<SD, ED, CD>
    : never;
};

export type UseAxiosList = Record<string, UseAxiosRequest>;

const DEFAULT_OPTIONS: UseAxiosRequestOptions = {
  autoAbort: false,
};

const defaultOptionsKeys = Object.keys(DEFAULT_OPTIONS);

const useAxios = <A extends UseAxiosList, AO = unknown, BD = unknown>(
  api: A,
  options?: UseAxiosOptions<AO, BD>,
): UseAxios<A, AO> => {
  const controllers = useRef<{ [key: string]: AxiosRequestAbort }>({});

  const isMounted = useIsMounted();

  const requests = useMemo(() => {
    return mapValues(api, (apiRequest) => {
      return async (data?: any, apiOptions?: AO, configOptions?: UseAxiosRequestOptions): Promise<AxiosResponseRequest> => {
        const apiId = uniqueId('api:');

        const requestOptions: UseAxiosRequestOptions = { ...DEFAULT_OPTIONS, ...configOptions };

        const request = apiRequest(data, withoutProperties(requestOptions, defaultOptionsKeys));

        let before: BD | undefined = undefined;

        if (typeof options?.onBefore === 'function') {
          before = await options?.onBefore(apiOptions, requestOptions);
        }

        if (requestOptions.autoAbort) {
          controllers.current[apiId] = request.abort;
        }

        const response = await request.start({
          abort: requestOptions.autoAbort && !isMounted.current,
        });

        delete controllers.current[apiId];

        if (typeof options?.onAfter === 'function') {
          await options?.onAfter(response, before, apiOptions, requestOptions);
        }

        return response;
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
