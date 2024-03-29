import { getAgify } from './getAgify';
import { getAgifyAsync } from './getAgifyAsync';
import { request } from './request';

export type ApiList = typeof api;

export type ApiKey = keyof ApiList;

export const api = {
  getAgify,
  getAgifyAsync,
  request,
};
