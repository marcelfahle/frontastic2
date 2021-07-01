import { mutate } from "swr";

type CartDetails = {
  account?: object;
  shipping?: object;
  billing?: object;
  shippingMethodName?: object;
  custom?: object;
};

export const updateCart = (url: string, _key: string) => async (
  payload: CartDetails
) => {
  const res = await fetch(`${url}/api/cart/cart/update`, {
    body: JSON.stringify(payload),
    headers: {
      accept: "application/json"
    },
    credentials: "include",
    method: "POST"
  });
  console.log("cart updated, ", payload, res);
  mutate(`${url}/api/cart/cart`);
};
