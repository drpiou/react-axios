import { log } from '@drpiou/ts-utils';
import { useMemo } from 'react';
import { useAxios, UseAxios, UseAxiosCallbackAfter, UseAxiosCallbackBefore } from '../../lib';
import { api, ApiList } from '../api';

export type UseApiOptions = {
  message?: string;
};

type Before = {
  message: string;
};

const onBefore: UseAxiosCallbackBefore<UseApiOptions, Before> = (apiOptions, configOptions) => {
  log('useApi@onBefore:', { apiOptions, configOptions });

  return { message: apiOptions?.message || '' };
};

const onAfter: UseAxiosCallbackAfter<UseApiOptions, Before> = (response, before, apiOptions, configOptions) => {
  log('useApi@onAfter:', { response, before, apiOptions, configOptions });
};

export const useApi = (): UseAxios<ApiList, UseApiOptions> => {
  const options = useMemo(() => ({ onBefore, onAfter }), []);

  return useAxios(api, options);
};
