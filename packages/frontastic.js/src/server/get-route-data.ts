import fetcher from "../fetcher"
import {FrontasticRoute} from '../types'

const getRouteData = (url: string, _key: string) => async (urlParams: any) => {
  const slug = urlParams.slug?.join("/") || "";
  const endpoint = `${url}/${slug !== "index" ? slug : ""}`;

  const data: FrontasticRoute = await fetcher({url : endpoint, method : "GET"});
  return {data};
};
export default getRouteData;
