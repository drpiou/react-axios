import { AxiosOptions, AxiosRequest } from '@drpiou/axios';
import { request } from './request';

export type ApiAgifyData = {
  name: string;
};

export type ApiAgifyResponseData = Record<string, unknown>;

export const getAgify = (data: ApiAgifyData, options?: AxiosOptions): AxiosRequest<ApiAgifyResponseData> => {
  return request(
    {
      params: data,
    },
    options,
  );
};
