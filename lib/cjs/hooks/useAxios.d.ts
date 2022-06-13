import { AxiosConfig, AxiosOptions, AxiosResponseRequest } from '@drpiou/axios';
export declare type UseAxiosOptions<BD = unknown, SD = any, ED = any, CD = any> = {
    onAfter?: UseAxiosCallbackAfter<BD, SD, ED, CD>;
    onBefore?: UseAxiosCallbackBefore<BD, SD, ED, CD>;
};
export declare type UseAxiosRequestOptions<SD = any, ED = any> = AxiosOptions<SD, ED> & {
    autoAbort?: boolean;
};
export declare type UseAxiosCallbackAfter<BD = unknown, SD = any, ED = any, CD = any> = (response: AxiosResponseRequest<SD, ED, CD>, before: BD | undefined, config: AxiosConfig<CD>, options?: UseAxiosRequestOptions<SD, ED>) => void | Promise<void>;
export declare type UseAxiosCallbackBefore<BD = unknown, SD = any, ED = any, CD = any> = (config: AxiosConfig<CD>, options?: UseAxiosRequestOptions<SD, ED>) => BD | Promise<BD>;
export declare type UseAxiosRequest = <SD = any, ED = any, CD = any>(config: AxiosConfig<CD>, options?: UseAxiosRequestOptions<SD, ED>) => Promise<AxiosResponseRequest<SD, ED>>;
export declare type UseAxios = {
    request: UseAxiosRequest;
};
declare const useAxios: <BD = unknown>(options?: UseAxiosOptions<BD, any, any, any> | undefined) => UseAxios;
export default useAxios;
