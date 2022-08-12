import { getAgify } from './getAgify';
import { request } from './request';

export type ApiList = typeof api;

export type ApiKey = keyof ApiList;

export const api = {
  getAgify,
  request,
};
