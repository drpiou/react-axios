import { AxiosRequestData } from '@drpiou/axios';
import { request } from './request';

export type ApiTranslationData = {
  lang_code: string;
};

export type ApiTranslationResponseData = Record<string, unknown>;

export const getTranslation: AxiosRequestData<ApiTranslationData, ApiTranslationResponseData> = (data, options) => {
  return request(
    {
      url: 'translation',
      method: 'GET',
      params: data,
    },
    options,
  );
};
