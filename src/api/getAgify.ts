import { AxiosRequestData } from '@drpiou/axios';
import { request } from './request';

export type ApiAgifyData = {
  name: string;
};

export type ApiTranslationResponseData = Record<string, unknown>;

export const getAgify: AxiosRequestData<ApiAgifyData, ApiTranslationResponseData> = (data, options) => {
  return request(
    {
      params: data,
    },
    options,
  );
};
