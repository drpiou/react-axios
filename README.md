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
yarn add @drpiou/axios@0.0.4
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

export type UseApiOptionsBefore = {
  message: string;
};

const onBefore: UseAxiosCallbackBefore<UseApiOptions, UseApiOptionsBefore> = (
  apiOptions,
) => {
  console.log('useApi@onBefore:', { apiOptions });

  return { message: apiOptions?.message || '' };
};

const onAfter: UseAxiosCallbackAfter<UseApiOptions, UseApiOptionsBefore> = (
  response,
  before,
  apiOptions,
) => {
  console.log('useApi@onAfter:', {
    response,
    before,
    apiOptions,
  });
};

const options = { onBefore, onAfter };

export const useApi = (): UseAxios<ApiList, UseApiOptions> => {
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
import { AxiosOptions, AxiosRequest } from '@drpiou/axios';
import { request } from './request';

export type ApiAgifyData = {
  name: string;
};

export type ApiAgifyResponseData = Record<string, unknown>;

export const getAgify = (
  data: ApiAgifyData,
  options?: AxiosOptions,
): AxiosRequest<ApiAgifyResponseData> => {
  return request(
    {
      params: data,
    },
    options,
  );
};
```

### `api/getAgifyAsync.ts`

```typescript
import { AxiosOptions, AxiosRequest } from '@drpiou/axios';
import { ApiAgifyData, ApiAgifyResponseData, getAgify } from './getAgify';

export const getAgifyAsync = async (
  data: ApiAgifyData,
  options?: AxiosOptions,
): Promise<AxiosRequest<ApiAgifyResponseData>> => {
  return getAgify(data, options);
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
    void api
      .getAgify({ name: 'test' })
      .start({ autoAbort: true, message: 'test' });
  };

  const handlePressAsync = (): void => {
    void api.getAgifyAsync({ name: 'test' }).then((request) => {
      void request.start({ autoAbort: true, message: 'test' });
    });
  };

  return <div onClick={handlePress} />;
};

export default MyComponent;
```

## Documentation

```typescript
import {
  AxiosRequest,
  AxiosRequestAbort,
  AxiosRequestResponse,
} from '@drpiou/axios';

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
  onBefore?: UseAxiosCallbackBefore<AO, BD>;
};

export type UseAxiosApiOptions<AO = unknown> = AO & {
  autoAbort?: boolean;
};

export type UseAxiosCallbackAfter<
  AO = unknown,
  BD = unknown,
  SD = any,
  ED = any,
  CD = any,
> = (
  response: AxiosRequestResponse<SD, ED, CD>,
  before: BD | undefined,
  apiOptions?: UseAxiosApiOptions<AO>,
) => void | Promise<void>;

export type UseAxiosCallbackBefore<AO = unknown, BD = unknown> = (
  apiOptions?: UseAxiosApiOptions<AO>,
) => BD | Promise<BD>;

export type UseAxiosRequest<AO = unknown, SD = any, ED = any, CD = any> = {
  start: (
    apiOptions?: UseAxiosApiOptions<AO>,
  ) => Promise<AxiosRequestResponse<SD, ED, CD>>;
  abort: AxiosRequestAbort;
};

export type UseAxios<A, AO = unknown> = {
  [K in keyof A]: A[K] extends (
    ...args: infer P
  ) => AxiosRequest<infer SD, infer ED, infer CD>
    ? (...args: P) => UseAxiosRequest<AO, SD, ED, CD>
    : A[K] extends (
        ...args: infer P
      ) => Promise<AxiosRequest<infer SD, infer ED, infer CD>>
    ? (...args: P) => Promise<UseAxiosRequest<AO, SD, ED, CD>>
    : never;
};

export type UseAxiosList = Record<
  string,
  (...args: any[]) => AxiosRequest | Promise<AxiosRequest>
>;
```
