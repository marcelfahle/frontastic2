"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetcher_1 = require("../fetcher");
const getRouteData = (url, _key) => async (urlParams) => {
    var _a;
    const slug = ((_a = urlParams.slug) === null || _a === void 0 ? void 0 : _a.join("/")) || "";
    const endpoint = `${url}/${slug !== "index" ? slug : ""}`;
    const data = await fetcher_1.default({ url: endpoint, method: "GET" });
    return { data };
};
exports.default = getRouteData;
//# sourceMappingURL=get-route-data.js.map