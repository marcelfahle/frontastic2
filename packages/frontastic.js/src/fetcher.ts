import { handleFetchResponse } from "./utils";

export type Fetcher<T = any, B = any> = (
  options: FetcherOptions<B>
) => T | Promise<T>;

export type FetcherOptions<Body = any> = {
  url?: string;
  query?: string;
  method?: string;
  variables?: any;
  body?: Body;
};

const fetcher: Fetcher = async ({
  url = "",
  method = "POST",
  variables,
  query
}) => {
  return handleFetchResponse(
    await fetch(url, {
      method,
      body: method !== "GET" ? JSON.stringify({ query, variables }) : undefined,
      headers: {
        "X-Frontastic-Access-Token": "APIKEY",
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
  );
};

export default fetcher;
