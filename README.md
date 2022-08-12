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

```typescript jsx
import { api, ApiList } from '@/src/api';
import {
  UseAxios,
  useAxios,
  UseAxiosCallbackAfter,
} from '@drpiou/react-axios';

export type UseApiOptions = {
  showNotification?: boolean;
};

export type UseApiCallbackAfter = UseAxiosCallbackAfter<UseApiOptions>;

export const useApi = (): UseAxios<ApiList, UseApiOptions> => {
  const notification = useNotification();

  const callbackAfter: UseApiCallbackAfter = useCallback(
    (response, before, apiOptions) => {
      if (apiOptions?.showNotification) {
        notification.show(response.isError ? 'error' : 'success');
      }
    },
    [notification],
  );

  const options = useMemo(
    () => ({
      onAfter: callbackAfter,
    }),
    [callbackBefore],
  );

  return useAxios(api, options);
};
```

### `api/index.ts`

```typescript
import { getTranslation } from '@/api/getTranslation';

export type ApiList = typeof api;

export type ApiKey = keyof ApiList;

export const api = {
  getTranslation,
};
```

### `api/getTranslation.ts`

```typescript
import { requestApi } from '@/api/requestApi';
import { AxiosRequestData } from '@drpiou/axios';

export type ApiTranslationData = {
  lang_code: string;
};

export type ApiTranslationResponseData = Record<string, unknown>;

export const getTranslation: AxiosRequestData<
  ApiTranslationData,
  ApiTranslationResponseData
> = (data, options) => {
  return requestApi(
    {
      url: 'translation',
      method: 'GET',
      params: data,
    },
    options,
  );
};
```

### `api/requestApi.ts`

```typescript
import { prepareAxios } from '@drpiou/axios';

export const requestApi: typeof prepareAxios = (config, options) => {
  return prepareAxios(
    {
      baseURL: 'https://api.domain.com',
      ...config,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=UTF-8',
        ...config?.headers,
      },
    },
    options,
  );
};
```

### `components/MyComponent/index.tsx`

```typescript jsx
import { useApi } from '../../hooks/useApi';

const MyComponent = (): JSX.Element => {
  const api = useApi();

  const handlePress = (): void => {
    void api.getTranslation(
      { lang_code: 'fr' },
      { showNotification: true },
      { autoAbort: true },
    );
  };

  return <div onClick={handlePress} />;
};

export default MyComponent;
```

## Documentation

```typescript
type useAxios = <A extends UseAxiosList, AO = unknown, BD = unknown>(
  api: A,
  options?: UseAxiosOptions<AO, BD>,
) => UseAxios<A, AO>;

type UseAxiosOptions<
  AO = unknown,
  BD = unknown,
  SD = any,
  ED = any,
  CD = any,
> = {
  onAfter?: UseAxiosCallbackAfter<AO, BD, SD, ED, CD>;
  onBefore?: UseAxiosCallbackBefore<AO, BD, SD, ED>;
};

type UseAxiosRequestOptions<SD = any, ED = any> = AxiosOptions<SD, ED> & {
  autoAbort?: boolean;
};

type UseAxiosCallbackAfter<
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

type UseAxiosCallbackBefore<AO = unknown, BD = unknown, SD = any, ED = any> = (
  apiOptions?: AO,
  configOptions?: UseAxiosRequestOptions<SD, ED>,
) => BD | Promise<BD>;

type UseAxiosRequest<CD = any, SD = any, ED = any> =
  | AxiosRequestData<CD, SD, ED>
  | AxiosRequestDataOptional<CD, SD, ED>
  | AxiosRequestDataVoid<SD, ED>;

type UseAxiosRequestData<SD = any, ED = any, CD = any, AO = unknown> = (
  data: CD,
  apiOptions?: AO,
  configOptions?: UseAxiosRequestOptions<SD, ED>,
) => Promise<AxiosResponseRequest<SD, ED, CD> | undefined>;

type UseAxiosRequestDataOptional<SD = any, ED = any, CD = any, AO = unknown> = (
  data?: CD | null,
  apiOptions?: AO,
  configOptions?: UseAxiosRequestOptions<SD, ED>,
) => Promise<AxiosResponseRequest<SD, ED, CD> | undefined>;

type UseAxiosRequestDataVoid<SD = any, ED = any, AO = unknown> = (
  data?: null,
  apiOptions?: AO,
  configOptions?: UseAxiosRequestOptions<SD, ED>,
) => Promise<AxiosResponseRequest<SD, ED> | undefined>;

type UseAxios<A, AO = unknown> = {
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

type UseAxiosList = Record<string, UseAxiosRequest>;
```
