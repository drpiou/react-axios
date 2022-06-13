import { AxiosConfig, AxiosOptions, AxiosRequestAbort, AxiosResponseRequest, prepareAxios } from '@drpiou/axios';
import { useIsMounted, useOnUnmount } from '@drpiou/react-utils';
import { withoutProperties } from '@drpiou/ts-utils';
import map from 'lodash/map';
import uniqueId from 'lodash/uniqueId';
import React from 'react';

export type UseAxiosOptions<BD = unknown, SD = any, ED = any, CD = any> = {
  onAfter?: UseAxiosCallbackAfter<BD, SD, ED, CD>;
  onBefore?: UseAxiosCallbackBefore<BD, SD, ED, CD>;
};

export type UseAxiosRequestOptions<SD = any, ED = any> = AxiosOptions<SD, ED> & {
  autoAbort?: boolean;
};

export type UseAxiosCallbackAfter<BD = unknown, SD = any, ED = any, CD = any> = (
  response: AxiosResponseRequest<SD, ED, CD>,
  before: BD | undefined,
  config: AxiosConfig<CD>,
  options?: UseAxiosRequestOptions<SD, ED>,
) => void | Promise<void>;

export type UseAxiosCallbackBefore<BD = unknown, SD = any, ED = any, CD = any> = (
  config: AxiosConfig<CD>,
  options?: UseAxiosRequestOptions<SD, ED>,
) => BD | Promise<BD>;

export type UseAxiosRequest = <SD = any, ED = any, CD = any>(
  config: AxiosConfig<CD>,
  options?: UseAxiosRequestOptions<SD, ED>,
) => Promise<AxiosResponseRequest<SD, ED>>;

export type UseAxios = {
  request: UseAxiosRequest;
};

const DEFAULT_OPTIONS: UseAxiosRequestOptions = {
  autoAbort: false,
};

const defaultOptionsKeys = Object.keys(DEFAULT_OPTIONS);

const useAxios = <BD = unknown>(options?: UseAxiosOptions<BD>): UseAxios => {
  const controllers = React.useRef<{ [key: string]: AxiosRequestAbort }>({});

  const isMounted = useIsMounted();

  const requestAxios = React.useCallback(
    async <CD = any, SD = any, ED = any>(
      config: AxiosConfig<CD>,
      configOptions?: UseAxiosRequestOptions<SD, ED>,
    ): Promise<AxiosResponseRequest<SD, ED, CD>> => {
      const axiosId = uniqueId('axios:');

      const requestOptions = { ...DEFAULT_OPTIONS, ...configOptions } as UseAxiosRequestOptions<SD, ED>;

      const request = prepareAxios<SD, ED, CD>(config, withoutProperties(requestOptions, defaultOptionsKeys));

      let before: BD | undefined = undefined;

      if (typeof options?.onBefore === 'function') {
        before = await options?.onBefore(config, configOptions);
      }

      if (requestOptions.autoAbort) {
        controllers.current[axiosId] = request.abort;
      }

      const response = await request.start({
        abort: requestOptions.autoAbort && !isMounted.current,
      });

      delete controllers.current[axiosId];

      if (typeof options?.onAfter === 'function') {
        await options?.onAfter(response, before, config, configOptions);
      }

      return response;
    },
    [isMounted, options],
  );

  useOnUnmount(() => {
    map(controllers.current, (abort) => {
      abort();
    });
  });

  return React.useMemo(
    () => ({
      request: requestAxios,
    }),
    [requestAxios],
  );
};

export default useAxios;
