import { AxiosConfig, AxiosOptions, AxiosRequest, AxiosRequestData, AxiosRequestDataOptional, AxiosRequestDataVoid, AxiosResponseRequest } from '@drpiou/axios';
export declare type UseAxiosOptions<AO = unknown, BD = unknown, SD = any, ED = any, CD = any> = {
    onAfter?: UseAxiosCallbackAfter<AO, BD, SD, ED, CD>;
    onBefore?: UseAxiosCallbackBefore<AO, BD, SD, ED>;
};
export declare type UseAxiosRequestOptions<SD = any, ED = any> = AxiosOptions<SD, ED> & {
    autoAbort?: boolean;
};
export declare type UseAxiosCallbackAfter<AO = unknown, BD = unknown, SD = any, ED = any, CD = any> = (response: AxiosResponseRequest<SD, ED, CD>, before: BD | undefined, apiOptions?: AO, configOptions?: UseAxiosRequestOptions<SD, ED>) => void | Promise<void>;
export declare type UseAxiosCallbackBefore<AO = unknown, BD = unknown, SD = any, ED = any> = (apiOptions?: AO, configOptions?: UseAxiosRequestOptions<SD, ED>) => BD | Promise<BD>;
export declare type UseAxiosRequest<CD = any, SD = any, ED = any> = AxiosRequestData<CD, SD, ED> | AxiosRequestDataOptional<CD, SD, ED> | AxiosRequestDataVoid<SD, ED>;
export declare type UseAxiosRequestData<SD = any, ED = any, CD = any, AO = unknown> = (data: CD, apiOptions?: AO, configOptions?: UseAxiosRequestOptions<SD, ED>) => Promise<AxiosResponseRequest<SD, ED, CD> | undefined>;
export declare type UseAxiosRequestDataOptional<SD = any, ED = any, CD = any, AO = unknown> = (data?: CD | null, apiOptions?: AO, configOptions?: UseAxiosRequestOptions<SD, ED>) => Promise<AxiosResponseRequest<SD, ED, CD> | undefined>;
export declare type UseAxiosRequestDataVoid<SD = any, ED = any, AO = unknown> = (data?: null, apiOptions?: AO, configOptions?: UseAxiosRequestOptions<SD, ED>) => Promise<AxiosResponseRequest<SD, ED> | undefined>;
export declare type UseAxios<A, AO = unknown> = {
    [K in keyof A]: A[K] extends AxiosRequestDataVoid<infer SD, infer ED> ? UseAxiosRequestDataVoid<SD, ED, AO> : A[K] extends AxiosRequestDataOptional<infer CD, infer SD, infer ED> ? UseAxiosRequestDataOptional<SD, ED, CD, AO> : A[K] extends AxiosRequestData<infer CD, infer SD, infer ED> ? UseAxiosRequestData<SD, ED, CD, AO> : A[K] extends (config: AxiosConfig, options?: AxiosOptions | undefined) => AxiosRequest ? <SD, ED, CD>(data: AxiosConfig<CD>, apiOptions?: AO, options?: AxiosOptions<SD, ED>) => AxiosRequest<SD, ED, CD> : never;
};
export declare type UseAxiosList = Record<string, UseAxiosRequest>;
declare const useAxios: <A extends UseAxiosList, AO = unknown, BD = unknown>(api: A, options?: UseAxiosOptions<AO, BD, any, any, any> | undefined) => UseAxios<A, AO>;
export default useAxios;
