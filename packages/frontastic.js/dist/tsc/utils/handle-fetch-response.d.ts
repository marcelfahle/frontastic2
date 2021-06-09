export declare function getError(errors: any[], status: number): Error;
export declare function getAsyncError(res: Response): Promise<Error>;
declare const handleFetchResponse: (res: Response) => Promise<any>;
export default handleFetchResponse;
