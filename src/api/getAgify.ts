import { AxiosRequestData } from '@drpiou/axios';
import { request } from './request';

export type ApiAgifyData = {
  name: string;
};

export type ApiAgifyResponseData = Record<string, unknown>;

export const getAgify: AxiosRequestData<ApiAgifyData, ApiAgifyResponseData> = (data, options) => {
  return request(
    {
      params: data,
    },
    options,
  );
};
