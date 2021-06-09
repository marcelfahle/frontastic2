import { mutate } from "swr";

export const addItem = (url: string, _key: string) => async (
  variant: any,
  quantity: number
) => {
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
  mutate(`${url}/api/cart/cart`);
};

export const removeItem = (url: string, _key: string) => async (item: any) => {
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
  mutate(`${url}/api/cart/cart`);
};

// const { data } = useSWR(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cart/cart`);

// const addToCart = async e => {
//   e.preventDefault();

//   mutate(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cart/cart`);
// };
