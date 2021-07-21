import React from "react";

import { useCart } from "@frontastic/frontastic-js";
import { useTranslation } from "next-i18next";

import Price from "../../product/price";
import Button from "../../buttons";

const Summary = ({
  buttonDisabled = false,
  isLoading = false,
  onClick,
  buttonLabel,
  vouchersLabel,
}) => {
  const { t } = useTranslation('cart');

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
      <div className="text-left mb-4 grid grid-cols-2 gap-x-6 gap-y-2">
        <p className="text-md text-neutral-900 leading-normal">{t('subtotal')}</p>
        <p className="text-md text-right text-neutral-900 uppercase leading-normal">
          <Price value={productPrice + discountPrice} />
        </p>

        {shippingMethod ? (
          <>
            <p className="text-md text-neutral-900 leading-normal">
              {t('shippingCosts')}
            </p>
            <p className="text-md text-right text-neutral-900 uppercase leading-normal">
              {shippingMethod.price ? (
                <Price value={shippingMethod.price} />
              ) : (
                <span>{t('freeShipping')}</span>
              )}
            </p>
          </>
        ) : null}

        <span className="mb-3 block w-full h-px bg-gray-300 col-span-2" />

        <p className="text-md text-neutral-900 leading-none font-bold">{t('totalAmount')}</p>

        {sum && (
          <p className="text-md text-right text-neutral-900 leading-none font-bold">
            <Price value={sum} />
          </p>
        )}

        <div className="text-sm text-neutral-600 col-span-2">
          ({t('totalAmount')} {totalTaxes && <Price value={totalTaxes} />} {t('inclVat')})
        </div>
      </div>

      {onClick && (
        <Button
          name={buttonLabel}
          className={`btn bg-primary-500 text-white w-full h-10 focus:outline-none ${
            isLoading || buttonDisabled ? "cursor-default" : ""
          }`}
          onClick={onClick}
          disabled={isLoading || buttonDisabled}
        >
          {isLoading ? "loading" : buttonLabel}
        </Button>
      )}
      {vouchersLabel && (
        <p className="mt-4 text-xs text-neutral-600 text-center">{vouchersLabel}</p>
      )}
    </section>
  );
};

export default Summary;
