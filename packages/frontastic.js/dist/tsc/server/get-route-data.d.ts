import { FrontasticRoute } from '../types';
declare const getRouteData: (url: string, _key: string) => (urlParams: any) => Promise<{
    data: FrontasticRoute;
}>;
export default getRouteData;
