import React from "react";

import { useCart } from "@frontastic/frontastic-js";

import Price from "../../product/price";
import Button from "../../buttons";

const Summary = ({
  disabled = false,
  isLoading = false,
  onClick,
  buttonLabel
}) => {
  const { data } = useCart();

  const { sum, lineItems, taxed, shippingMethod } = data.cart;

  const totalTaxes = taxed?.taxPortions?.reduce((a, b) => a + b.amount, 0);

  const productPrice = lineItems?.reduce((a, b) => {
    if (b.discountedPrice) {
      return a + b.discountedPrice * b.count;
    } else {
      return a + b.price * b.count;
    }
  }, 0);

  const discountPrice = lineItems?.reduce((a, b) => {
    return (
      a +
      b.count *
        b.discounts.reduce((x, y) => {
          return x + y.discountedAmount;
        }, 0)
    );
  }, 0);

  return (
    <section>
      <div className="text-left mb-4 grid grid-cols-2 col-gap-6 row-gap-2">
        <p className="text-md text-neutral-900 leading-normal">Subtotal</p>
        <p className="text-md text-right text-neutral-900 uppercase leading-normal">
          <Price value={productPrice + discountPrice} />
        </p>

        {shippingMethod ? (
          <>
            <p className="text-md text-neutral-900 leading-normal">
              Shipping Costs
            </p>
            <p className="text-md text-right text-neutral-900 uppercase leading-normal">
              {shippingMethod.price ? (
                <Price value={shippingMethod.price} />
              ) : (
                <span>Free Shipping</span>
              )}
            </p>
          </>
        ) : null}

        <span className="mb-3 block w-full h-px bg-neutral-300 col-start-auto col-end-span-2" />

        <p className="text-md text-neutral-900 leading-none font-bold">Total</p>

        {sum && (
          <p className="text-md text-right text-neutral-900 leading-none font-bold">
            <Price value={sum} />
          </p>
        )}

        <div className="text-sm text-neutral-600 col-start-auto col-end-span-2">
          {totalTaxes && <Price value={totalTaxes} />} <br />
          (Total amount incl.VAT)
        </div>
      </div>

      {onClick && (
        <Button
          name={buttonLabel}
          className={`btn bg-primary-500 text-white w-full h-10 focus:outline-none ${
            isLoading || disabled ? "cursor-default" : ""
          }`}
          onClick={onClick}
          disabled={isLoading || disabled}
        >
          {isLoading ? "loading" : buttonLabel}
        </Button>
      )}

      <p className="text-sm">
        You can enter voucher codes in the last step of the order process.
      </p>
    </section>
  );
};

export default Summary;
