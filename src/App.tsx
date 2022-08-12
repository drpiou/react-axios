import { AxiosOptions, AxiosResponseRequest } from '@drpiou/axios';
import { log } from '@drpiou/ts-utils';
import { mapValues, uniq, values } from 'lodash';
import React, { useState } from 'react';
import './App.css';
import { useApi } from './hooks/useApi';

const optionsTest: AxiosOptions = {
  test: true,
  testData: {
    foo: 'boo',
  },
};

const defaultResult = {
  code: 200,
  isError: false,
};

const errorResult = {
  isAxiosError: true,
  isCancel: false,
  isConnexionError: false,
  isConnexionTimeoutError: false,
  isError: true,
};

const App = (): JSX.Element => {
  const api = useApi();

  const [result1, setResult1] = useState<{ response: AxiosResponseRequest | undefined; expected: boolean }>();
  const [result2, setResult2] = useState<{ response: AxiosResponseRequest | undefined; expected: boolean }>();
  const [result3, setResult3] = useState<{ response: AxiosResponseRequest | undefined; expected: boolean }>();
  const [result4, setResult4] = useState<{ response: AxiosResponseRequest | undefined; expected: boolean }>();
  const [result5, setResult5] = useState<{ response: AxiosResponseRequest | undefined; expected: boolean }>();
  const [result6, setResult6] = useState<{ response: AxiosResponseRequest | undefined; expected: boolean }>();

  const expected = (response: AxiosResponseRequest, expectedValues: any): boolean => {
    return (
      uniq(
        values(
          mapValues(expectedValues, (value, key) => {
            if (key === 'code') {
              return String(response.response?.status === value);
            }

            return String(response[key as never] === value);
          }),
        ),
      ).indexOf('false') === -1
    );
  };

  const handleClick1 = (): void => {
    void api.getAgify({ name: 'test' }, { message: 'test' }).then((response) => {
      log('success-api', { response });

      setResult1({ response, expected: response ? expected(response, defaultResult) : false });
    });
  };

  const handleClick2 = (): void => {
    void api.getAgify({ name: 'test' }, { message: 'test' }, { ...optionsTest, testStatus: 200 }).then((response) => {
      log('success-test', { response });

      setResult2({ response, expected: response ? expected(response, defaultResult) : false });
    });
  };

  const handleClick3 = (): void => {
    void api.getAgify({ name: 'test' }, { message: 'test' }, { testCancel: true }).then((response) => {
      log('abort-api', { response });

      setResult3({ response, expected: response ? expected(response, { ...errorResult, isCancel: true }) : false });
    });

    // TODO: change useAxios to decorate start() instead of prepareAxios()
    // request.abort();
  };

  const handleClick4 = (): void => {
    void api
      .getAgify({ name: 'test' }, { message: 'test' }, { ...optionsTest, testStatus: 200, testCancel: true, testSleep: 5000 })
      .then((response) => {
        log('abort-test', { response });

        setResult4({ response, expected: response ? expected(response, { ...errorResult, isCancel: true }) : false });
      });
  };

  const handleClick5 = (): void => {
    void api.getAgify({ name: 'test' }, { message: 'test' }, { ...optionsTest, testStatus: 404 }).then((response) => {
      log('error-test', { response });

      setResult5({ response, expected: response ? expected(response, { ...errorResult, code: 404 }) : false });
    });
  };

  const handleClick6 = (): void => {
    void api
      .getAgify(
        { name: 'test' },
        { message: 'test' },
        { ...optionsTest, testStatus: 200, testNetworkError: true, testSleep: 1000 },
      )
      .then((response) => {
        log('network-error-test', { response });

        setResult6({ response, expected: response ? expected(response, { ...errorResult, isNetworkError: true }) : false });
      });
  };

  return (
    <>
      <div className={'card'}>
        <button onClick={handleClick1}>success-api</button>

        {result1 && <Result {...result1} />}
      </div>
      <div className={'card'}>
        <button onClick={handleClick2}>success-test</button>

        {result2 && <Result {...result2} />}
      </div>
      <div className={'card'}>
        <button onClick={handleClick3}>abort-api</button>

        {result3 && <Result {...result3} />}
      </div>
      <div className={'card'}>
        <button onClick={handleClick4}>abort-test</button>

        {result4 && <Result {...result4} />}
      </div>
      <div className={'card'}>
        <button onClick={handleClick5}>error-test</button>

        {result5 && <Result {...result5} />}
      </div>
      <div className={'card'}>
        <button onClick={handleClick6}>network-error-test</button>

        {result6 && <Result {...result6} />}
      </div>
    </>
  );
};

const Result = (props: { response: AxiosResponseRequest | undefined; expected: boolean }): JSX.Element => {
  const { response, expected } = props;

  return (
    <p className={`result ${expected ? 'success' : 'error'}`}>
      <div>
        <span>status: </span>
        <span>{response?.isError ? 'error' : 'success'}</span>
      </div>
      <div>
        <span>code: </span>
        <span>{String(response?.response?.status)}</span>
      </div>
      <div>
        <span>isError: </span>
        <span>{String(response?.isError)}</span>
      </div>

      {response?.isError && (
        <>
          <div>
            <span>isAxiosError: </span>
            <span>{String(response?.isAxiosError)}</span>
          </div>
          <div>
            <span>isCancel: </span>
            <span>{String(response?.isCancel)}</span>
          </div>
          <div>
            <span>isConnexionError: </span>
            <span>{String(response?.isConnexionError)}</span>
          </div>
          <div>
            <span>isConnexionTimeoutError: </span>
            <span>{String(response?.isConnexionTimeoutError)}</span>
          </div>
          <div>
            <span>isNetworkError: </span>
            <span>{String(response?.isNetworkError)}</span>
          </div>
        </>
      )}

      <div>
        <span>data: </span>
        <span>{JSON.stringify(response?.data)}</span>
      </div>
      <div>
        <span>result: </span>
        <span>{expected ? 'success' : 'error'}</span>
      </div>
    </p>
  );
};

export default App;
