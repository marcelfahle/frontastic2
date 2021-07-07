import React from "react";

import { useCart } from "@frontastic/frontastic-js";

import FullCart from "./FullCart";
import { EmptyState } from "../../../components/empty-state";

const Cart = () => {
  const { data } = useCart();
  if (data && data.cart.lineItems && data.cart.lineItems.length > 0) {
    const { lineItems, sum, currency } = data.cart;

    return (
      <FullCart
        isLoading={false}
        items={lineItems}
        sum={sum}
        currency={currency}
      />
    );
  } else {
    return <EmptyState icon={"😿😿😿"} title={"Nothing here yet"} />;
  }
};

export default Cart;
