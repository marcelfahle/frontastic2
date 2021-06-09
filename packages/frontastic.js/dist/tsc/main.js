"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClient = void 0;
const get_route_data_1 = require("./server/get-route-data");
function createClient(frontasticUrl, frontasticKey) {
    return { getRouteData: get_route_data_1.default(frontasticUrl, frontasticKey) };
}
exports.createClient = createClient;
__exportStar(require("./server/get-route-data"), exports);
__exportStar(require("./types"), exports);
__exportStar(require("./renderer"), exports);
__exportStar(require("./component"), exports);
__exportStar(require("./provider"), exports);
//# sourceMappingURL=main.js.map