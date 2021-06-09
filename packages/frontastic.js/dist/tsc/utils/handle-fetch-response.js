"use strict";
//import { FetcherError } from '@commerce/utils/errors'
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAsyncError = exports.getError = void 0;
function getError(errors, status) {
    //return new FetcherError({ errors, status })
    return new Error(`Error ${errors.length}, ${status}`);
}
exports.getError = getError;
async function getAsyncError(res) {
    const data = await res.json();
    return getError(data.errors, res.status);
}
exports.getAsyncError = getAsyncError;
const handleFetchResponse = async (res) => {
    console.log("res", res, res.ok);
    if (res.ok) {
        const data = await res.json();
        console.log("fetcher response ", data);
        // Frontastic api currently doesn't handle errors
        // add later here
        // if (errors && errors.length) {
        //   throw getError(errors, res.status);
        // }
        return data;
    }
    throw await getAsyncError(res);
};
exports.default = handleFetchResponse;
//# sourceMappingURL=handle-fetch-response.js.map