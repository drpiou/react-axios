import { AxiosOptions, AxiosRequest } from '@drpiou/axios';
import { ApiAgifyData, ApiAgifyResponseData, getAgify } from './getAgify';

export const getAgifyAsync = async (data: ApiAgifyData, options?: AxiosOptions): Promise<AxiosRequest<ApiAgifyResponseData>> => {
  await (async (): Promise<void> => Promise.resolve())();

  return getAgify(data, options);
};
