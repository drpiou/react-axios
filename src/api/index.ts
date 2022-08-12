import { getTranslation } from './getTranslation';
import { request } from './request';

export type ApiList = typeof api;

export type ApiKey = keyof ApiList;

export const api = {
  getTranslation,
  request,
};
