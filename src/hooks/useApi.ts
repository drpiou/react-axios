import { log } from '@drpiou/ts-utils';
import { useAxios, UseAxios, UseAxiosCallbackAfter, UseAxiosCallbackBefore } from '../../lib';
import { api, ApiList } from '../api';

export type UseApiOptions = {
  message?: string;
};

export type UseApiOptionsBefore = {
  message: string;
};

const onBefore: UseAxiosCallbackBefore<UseApiOptions, UseApiOptionsBefore> = (apiOptions) => {
  log('useApi@onBefore:', { apiOptions });

  return { message: apiOptions?.message || '' };
};

const onAfter: UseAxiosCallbackAfter<UseApiOptions, UseApiOptionsBefore> = (response, before, apiOptions) => {
  log('useApi@onAfter:', { response, before, apiOptions });
};

const options = { onBefore, onAfter };

export const useApi = (): UseAxios<ApiList, UseApiOptions> => {
  return useAxios(api, options);
};
