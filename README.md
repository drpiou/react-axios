# `@drpiou/react-axios`

![Licence](https://img.shields.io/github/license/drpiou/react-axios)
![Package.json version](https://img.shields.io/github/package-json/v/drpiou/react-axios)
![Stage](https://img.shields.io/badge/stage-experimental-important)

The `@drpiou/react-axios` package provides a React api context around the `@drpiou/axios` package.

> - wraps `@drpiou/axios` requests in a hook
> - automatic abort: abort the request when the component unmounts.
> - written in TypeScript.

<!--ts-->

- [Compatibility](#compatibility)
- [Installation](#installation)
- [Example](#example)
- [Documentation](#documentation)

<!--te-->

## Compatibility

- React (17.0.2+)
- React Native (0.64.0+)
- Expo (43+)

## Installation

```shell
yarn add @drpiou/react-axios
```

### Peer Dependencies

```shell
yarn add @drpiou/axios@^0.0.2
```

## Usage

### `useAxios`

The `useAxios` React hook is expected to be wrapped around your own React hook. It accepts an object of api requests made with `@drpiou/axios` and an optional options object to interact with the request/response.

Minimal usage:

```typescript jsx
import { api, ApiList } from '@/src/api'; // See "Examples"
import { UseAxios, useAxios } from '@drpiou/react-axios';

export const useApi = (): UseAxios<ApiList> => {
  return useAxios(api);
};
```

## Example

### `hooks/useApi.ts`

```typescript
import { log } from '@drpiou/ts-utils';
import { useMemo } from 'react';
import {
  useAxios,
  UseAxios,
  UseAxiosCallbackAfter,
  UseAxiosCallbackBefore,
} from '@drpiou/react-axios';
import { api, ApiList } from '../api';

export type UseApiOptions = {
  message?: string;
};

type Before = {
  message: string;
};

const onBefore: UseAxiosCallbackBefore<UseApiOptions, Before> = (
  apiOptions,
  configOptions,
) => {
  log('useApi@onBefore:', { apiOptions, configOptions });

  return { message: apiOptions?.message || '' };
};

const onAfter: UseAxiosCallbackAfter<UseApiOptions, Before> = (
  response,
  before,
  apiOptions,
  configOptions,
) => {
  log('useApi@onAfter:', { response, before, apiOptions, configOptions });
};

export const useApi = (): UseAxios<ApiList, UseApiOptions> => {
  const options = useMemo(() => ({ onBefore, onAfter }), []);

  return useAxios(api, options);
};
```

### `api/index.ts`

```typescript
import { getAgify } from './getAgify';
import { request } from './request';

export type ApiList = typeof api;

export type ApiKey = keyof ApiList;

export const api = {
  getAgify,
  request,
};
```

### `api/getAgify.ts`

```typescript
import { AxiosRequestData } from '@drpiou/axios';
import { request } from './request';

export type ApiAgifyData = {
  name: string;
};

export type ApiTranslationResponseData = Record<string, unknown>;

export const getAgify: AxiosRequestData<
  ApiAgifyData,
  ApiTranslationResponseData
> = (data, options) => {
  return request(
    {
      params: data,
    },
    options,
  );
};
```

### `api/request.ts`

```typescript
import { prepareAxios } from '@drpiou/axios';

export const request: typeof prepareAxios = (config, options) => {
  return prepareAxios(
    {
      baseURL: 'https://api.agify.io',
      ...config,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=UTF-8',
        ...config?.headers,
      },
    },
    {
      ...options,
      log: 'verbose',
    },
  );
};
```

### `components/MyComponent/index.tsx`

```typescript jsx
import { useApi } from '../../hooks/useApi';

const MyComponent = (): JSX.Element => {
  const api = useApi();

  const handlePress = (): void => {
    void api.getAgify(
      { name: 'test' },
      { message: 'test' },
      { autoAbort: true },
    );
  };

  return <div onClick={handlePress} />;
};

export default MyComponent;
```

## Documentation

```typescript
export type useAxios = <A extends UseAxiosList, AO = unknown, BD = unknown>(
  api: A,
  options?: UseAxiosOptions<AO, BD>,
) => UseAxios<A, AO>;

export type UseAxiosOptions<
  AO = unknown,
  BD = unknown,
  SD = any,
  ED = any,
  CD = any,
> = {
  onAfter?: UseAxiosCallbackAfter<AO, BD, SD, ED, CD>;
  onBefore?: UseAxiosCallbackBefore<AO, BD, SD, ED>;
};

export type UseAxiosRequestOptions<SD = any, ED = any> = AxiosOptions<
  SD,
  ED
> & {
  autoAbort?: boolean;
};

export type UseAxiosCallbackAfter<
  AO = unknown,
  BD = unknown,
  SD = any,
  ED = any,
  CD = any,
> = (
  response: AxiosResponseRequest<SD, ED, CD>,
  before: BD | undefined,
  apiOptions?: AO,
  configOptions?: UseAxiosRequestOptions<SD, ED>,
) => void | Promise<void>;

export type UseAxiosCallbackBefore<
  AO = unknown,
  BD = unknown,
  SD = any,
  ED = any,
> = (
  apiOptions?: AO,
  configOptions?: UseAxiosRequestOptions<SD, ED>,
) => BD | Promise<BD>;

export type UseAxiosRequest<CD = any, SD = any, ED = any> =
  | AxiosRequestData<CD, SD, ED>
  | AxiosRequestDataOptional<CD, SD, ED>
  | AxiosRequestDataVoid<SD, ED>;

export type UseAxiosRequestData<SD = any, ED = any, CD = any, AO = unknown> = (
  data: CD,
  apiOptions?: AO,
  configOptions?: UseAxiosRequestOptions<SD, ED>,
) => Promise<AxiosResponseRequest<SD, ED, CD> | undefined>;

export type UseAxiosRequestDataOptional<
  SD = any,
  ED = any,
  CD = any,
  AO = unknown,
> = (
  data?: CD | null,
  apiOptions?: AO,
  configOptions?: UseAxiosRequestOptions<SD, ED>,
) => Promise<AxiosResponseRequest<SD, ED, CD> | undefined>;

export type UseAxiosRequestDataVoid<SD = any, ED = any, AO = unknown> = (
  data?: null,
  apiOptions?: AO,
  configOptions?: UseAxiosRequestOptions<SD, ED>,
) => Promise<AxiosResponseRequest<SD, ED> | undefined>;

export type UseAxios<A, AO = unknown> = {
  [K in keyof A]: A[K] extends AxiosRequestDataVoid<infer SD, infer ED>
    ? UseAxiosRequestDataVoid<SD, ED, AO>
    : A[K] extends AxiosRequestDataOptional<infer CD, infer SD, infer ED>
    ? UseAxiosRequestDataOptional<SD, ED, CD, AO>
    : A[K] extends AxiosRequestData<infer CD, infer SD, infer ED>
    ? UseAxiosRequestData<SD, ED, CD, AO>
    : A[K] extends (
        config: AxiosConfig,
        options?: AxiosOptions | undefined,
      ) => AxiosRequest
    ? <SD, ED, CD>(
        data: AxiosConfig<CD>,
        apiOptions?: AO,
        options?: AxiosOptions<SD, ED>,
      ) => AxiosRequest<SD, ED, CD>
    : never;
};

export type UseAxiosList = Record<string, UseAxiosRequest>;
```
