export declare type Fetcher<T = any, B = any> = (options: FetcherOptions<B>) => T | Promise<T>;
export declare type FetcherOptions<Body = any> = {
    url?: string;
    query?: string;
    method?: string;
    variables?: any;
    body?: Body;
};
declare const fetcher: Fetcher;
export default fetcher;
