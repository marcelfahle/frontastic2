import Image from "next/image";

import { useCart } from "@frontastic/frontastic-js";
import { useTranslation } from "next-i18next";

import Price from "../../product/price";
import { Dropdown } from "../../../../components";

const Product = ({
  itemId,
  image,
  name,
  designer,
  count,
  price,
  discountedPrice,
  color,
  size
}) => {
  const { t } = useTranslation('product');

  const { removeItem } = useCart();

  const productCounter = Array.from(Array(10).keys()).map(i => {
    return i + 1;
  });

  return (
    <div className="flex relative ">
      <div className="relative w-28 h-40">
        <Image src={image} layout="fill" className="" />
      </div>

      <div>
        <div className="text-md font-bold leading-tight">{name}</div>

        {designer && (
          <div className="text-sm text-neutral-600 leading-tight">
            {designer}
          </div>
        )}

        {color && (
          <div className="mt-3 text-sm text-neutral-600 leading-tight">
            {t('color')}: {color}
          </div>
        )}

        {size && (
          <div className="text-sm text-neutral-600 leading-tight">
            {t('size')}: {size}
          </div>
        )}

        <div className="mt-3 w-24">
          <Dropdown
            value={count}
            options={productCounter}
            formatOptionsLabel={option => {
              return option;
            }}
            onChange={i => {
              console.log({
                lineItemId: itemId,
                count: productCounter[i]
              });
            }}
          />
        </div>

        <div className="mt-3">
          <Price
            className="text-sm font-bold leading-tight"
            value={discountedPrice || price}
          />
        </div>
      </div>

      <div className="absolute top-0 right-0">
        <button
          className="flex sm:flex-row-reverse sm:ml-auto items-center justify-center focus:outline-none"
          aria-label={"remove"}
          onClick={() => {
            console.log({ lineItemId: itemId });
          }}
        >
          🗑
        </button>
      </div>
    </div>
  );
};

export default Product;
