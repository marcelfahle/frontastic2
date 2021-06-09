"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeItem = exports.addItem = void 0;
const swr_1 = require("swr");
const addItem = (url, _key) => async (variant, quantity) => {
    const payload = {
        _type: "Frontastic\\Common\\ProductApiBundle\\Domain\\Product",
        variant,
        count: quantity
    };
    const res = await fetch(`${url}/api/cart/cart/add`, {
        body: JSON.stringify(payload),
        headers: {
            accept: "application/json"
        },
        credentials: "include",
        method: "POST"
    });
    console.log("item added, ", variant, quantity, url, res);
    swr_1.mutate(`${url}/api/cart/cart`);
};
exports.addItem = addItem;
const removeItem = (url, _key) => async (item) => {
    const payload = {
        lineItemId: item.lineItemId
    };
    const res = await fetch(`${url}/api/cart/cart/lineItem/remove`, {
        body: JSON.stringify(payload),
        headers: {
            accept: "application/json"
        },
        credentials: "include",
        method: "POST"
    });
    console.log("item removed, ", item, res);
    swr_1.mutate(`${url}/api/cart/cart`);
};
exports.removeItem = removeItem;
// const { data } = useSWR(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cart/cart`);
// const addToCart = async e => {
//   e.preventDefault();
//   mutate(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cart/cart`);
// };
//# sourceMappingURL=add-cart-item.js.map