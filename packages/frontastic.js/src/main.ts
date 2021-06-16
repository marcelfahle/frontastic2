import getRouteData from "./server/get-route-data";

function createClient(frontasticUrl: string, frontasticKey: string) {
  return { getRouteData: getRouteData(frontasticUrl, frontasticKey) };
}

export { createClient };
export * from "./server/get-route-data";
export * from "./client/add-cart-item";
export * from "./client/cart-items";
export * from "./types";
export * from "./renderer";
export * from "./component";
export * from "./provider";
