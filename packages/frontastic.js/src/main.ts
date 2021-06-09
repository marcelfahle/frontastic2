import getRouteData from "./server/get-route-data";

function createClient(frontasticUrl: string, frontasticKey: string) {
  return { getRouteData: getRouteData(frontasticUrl, frontasticKey) };
}

export * from "./server/get-route-data";
export * from "./types";
export * from "./renderer";
export * from "./component";
export * from "./provider";
export { createClient };
