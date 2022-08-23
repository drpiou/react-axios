import { AxiosRequest, AxiosRequestAbort, AxiosRequestResponse } from '@drpiou/axios';
export declare type UseAxiosOptions<AO = unknown, BD = unknown, SD = any, ED = any, CD = any> = {
    onAfter?: UseAxiosCallbackAfter<AO, BD, SD, ED, CD>;
    onBefore?: UseAxiosCallbackBefore<AO, BD>;
};
export declare type UseAxiosApiOptions<AO = unknown> = AO & {
    autoAbort?: boolean;
};
export declare type UseAxiosCallbackAfter<AO = unknown, BD = unknown, SD = any, ED = any, CD = any> = (response: AxiosRequestResponse<SD, ED, CD>, before: BD | undefined, apiOptions?: UseAxiosApiOptions<AO>) => void | Promise<void>;
export declare type UseAxiosCallbackBefore<AO = unknown, BD = unknown> = (apiOptions?: UseAxiosApiOptions<AO>) => BD | Promise<BD>;
export declare type UseAxiosRequest<AO = unknown, SD = any, ED = any, CD = any> = {
    start: (apiOptions?: UseAxiosApiOptions<AO>) => Promise<AxiosRequestResponse<SD, ED, CD>>;
    abort: AxiosRequestAbort;
};
export declare type UseAxios<A, AO = unknown> = {
    [K in keyof A]: A[K] extends (...args: infer P) => AxiosRequest<infer SD, infer ED, infer CD> ? (...args: P) => UseAxiosRequest<AO, SD, ED, CD> : never;
};
export declare type UseAxiosList = Record<string, (...args: any[]) => AxiosRequest>;
declare const useAxios: <A extends UseAxiosList, AO = unknown, BD = unknown>(api: A, options?: UseAxiosOptions<AO, BD, any, any, any> | undefined) => UseAxios<A, AO>;
export default useAxios;
