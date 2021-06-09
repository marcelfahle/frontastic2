declare function createClient(frontasticUrl: string, frontasticKey: string): {
    getRouteData: (urlParams: any) => Promise<{
        data: import("./types").FrontasticRoute;
    }>;
};
export * from "./server/get-route-data";
export * from "./types";
export * from "./renderer";
export * from "./component";
export * from "./provider";
export { createClient };
