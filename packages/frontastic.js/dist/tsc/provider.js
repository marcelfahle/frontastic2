"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrontasticProvider = exports.fetcher = exports.useCart = void 0;
const React = require("react");
const add_cart_item_1 = require("./client/add-cart-item");
const cart_items_1 = require("./client/cart-items");
const initialState = {
    frontasticUrl: null,
    frontasticKey: null
};
const FrontasticContext = React.createContext(initialState);
const useCart = () => {
    const context = React.useContext(FrontasticContext);
    if (!context)
        throw new Error("Expected to be wrapped in FrontasticProvider");
    return context.useCart;
};
exports.useCart = useCart;
const fetcher = (url) => fetch(url, {
    headers: {
        accept: "application/json"
    },
    credentials: "include"
}).then(r => r.json());
exports.fetcher = fetcher;
const FrontasticProvider = ({ children, frontasticUrl, frontasticKey }) => {
    return (React.createElement(FrontasticContext.Provider, { value: {
            frontasticUrl,
            frontasticKey,
            useCart: {
                ...cart_items_1.cartItems(frontasticUrl, frontasticKey),
                addItem: add_cart_item_1.addItem(frontasticUrl, frontasticKey),
                removeItem: add_cart_item_1.removeItem(frontasticUrl, frontasticKey)
            }
        } }, children));
};
exports.FrontasticProvider = FrontasticProvider;
//# sourceMappingURL=provider.js.map