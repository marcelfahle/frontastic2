import useSWR from "swr";
import { fetcher } from "../provider";

export const cartItems = (url: string, _key: string) => {
  return useSWR(`${url}/api/cart/cart`, fetcher);
};
