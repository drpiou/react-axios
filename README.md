# `@drpiou/react-axios`

![GitHub](https://img.shields.io/github/license/drpiou/react-axios)
![GitHub package.json version](https://img.shields.io/github/package-json/v/drpiou/react-axios)
![Jest tests](https://img.shields.io/badge/stage-beta-important)
![GitHub all releases](https://img.shields.io/github/downloads/drpiou/react-axios/total)

The `@drpiou/react-axios` package provides a React axios context around the `@drpiou/axios` package.

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
yarn add @drpiou/axios@^0.0.1
```

## Example

### `useAxios`

The `useAxios` React hook makes axios calls.

```typescript jsx
import { useAxios } from '@drpiou/react-axios';

const MyComponent = (): JSX.Element => {
  const axios = useAxios();

  const handleClick = (): void => {
    void axios
      .request(
        {
          baseURL: 'https://my.domain',
          url: 'test',
        },
        {
          autoAbort: true,
        },
      )
      .then((response: AxiosResponseRequest) => {
        console.log(response);
      });
  };

  return <div onClick={handleClick} />;
};
```

## Documentation

```typescript
type useAxios = <BD = unknown>(options?: UseAxiosOptions<BD>) => UseAxios;

type UseAxiosOptions<BD = unknown, SD = any, ED = any, CD = any> = {
  onAfter?: UseAxiosCallbackAfter<BD, SD, ED, CD>;
  onBefore?: UseAxiosCallbackBefore<BD, SD, ED, CD>;
};

type UseAxiosRequestOptions<SD = any, ED = any> = AxiosOptions<SD, ED> & {
  autoAbort?: boolean; // Default: true
};

type UseAxiosCallbackAfter<BD = unknown, SD = any, ED = any, CD = any> = (
  response: AxiosResponseRequest<SD, ED, CD>,
  before: BD | undefined,
  config: AxiosConfig<CD>,
  options?: UseAxiosRequestOptions<SD, ED>,
) => void | Promise<void>;

type UseAxiosCallbackBefore<BD = unknown, SD = any, ED = any, CD = any> = (
  config: AxiosConfig<CD>,
  options?: UseAxiosRequestOptions<SD, ED>,
) => BD | Promise<BD>;

type UseAxiosRequest = <SD = any, ED = any, CD = any>(
  config: AxiosConfig<CD>,
  options?: UseAxiosRequestOptions<SD, ED>,
) => Promise<AxiosResponseRequest<SD, ED>>;

type UseAxios = {
  request: UseAxiosRequest;
};
```
