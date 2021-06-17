import useSWR from "swr";
import { fetcher } from "../provider";

export const shippingMethods = (url: string, _key: string) => {
  return useSWR(`${url}/api/cart/shipping-methods`, fetcher);
};
