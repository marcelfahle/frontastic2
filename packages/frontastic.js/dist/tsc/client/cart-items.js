"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartItems = void 0;
const swr_1 = require("swr");
const provider_1 = require("../provider");
const cartItems = (url, _key) => {
    return swr_1.default(`${url}/api/cart/cart`, provider_1.fetcher);
};
exports.cartItems = cartItems;
//# sourceMappingURL=cart-items.js.map