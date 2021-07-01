import * as React from "react";

import { addItem, removeItem } from "./client/add-cart-item";
import { updateCart } from "./client/update-cart";
import { cartItems } from "./client/cart-items";
import { shippingMethods } from "./client/shipping-methods";

const initialState: any = {
  frontasticUrl: null,
  frontasticKey: null,
  useCart: {}
};
const FrontasticContext = React.createContext(initialState);

export const fetcher = (url: string) =>
  fetch(url, {
    headers: {
      accept: "application/json"
    },
    credentials: "include"
  }).then(r => r.json());

export const FrontasticProvider: React.FC<{
  children?: React.ReactNode;
  frontasticUrl: string;
  frontasticKey: string;
}> = ({ children, frontasticUrl, frontasticKey }) => {
  return (
    <FrontasticContext.Provider
      value={{
        frontasticUrl,
        frontasticKey,
        useCart: {
          ...cartItems(frontasticUrl, frontasticKey),
          addItem: addItem(frontasticUrl, frontasticKey),
          updateCart: updateCart(frontasticUrl, frontasticKey),
          removeItem: removeItem(frontasticUrl, frontasticKey),
          shippingMethods: shippingMethods(frontasticUrl, frontasticKey)
        }
      }}
    >
      {children}
    </FrontasticContext.Provider>
  );
};

export const useCart = () => {
  const context = React.useContext(FrontasticContext);

  if (!context) throw new Error("Expected to be wrapped in FrontasticProvider");

  return context.useCart;
};
