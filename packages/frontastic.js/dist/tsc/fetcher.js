"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const fetcher = async ({ url = "", method = "POST", variables, query }) => {
    return utils_1.handleFetchResponse(await fetch(url, {
        method,
        body: method !== "GET" ? JSON.stringify({ query, variables }) : undefined,
        headers: {
            "X-Frontastic-Access-Token": "APIKEY",
            "Content-Type": "application/json",
            Accept: "application/json"
        }
    }));
};
exports.default = fetcher;
//# sourceMappingURL=fetcher.js.map