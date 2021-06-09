import * as React from "react";
export declare const useCart: () => any;
export declare const fetcher: (url: string) => Promise<any>;
export declare const FrontasticProvider: React.FC<{
    children?: React.ReactNode;
    frontasticUrl: string;
    frontasticKey: string;
}>;
