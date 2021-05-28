import Product from "./Product";
import Summary from "./Summary";
//import MiniSummary from "./MiniSummary";

const FullCart = ({ intl, items, sum, isLoading = false }) => {
  const buttonLabel = "Checkout";
  const vouchersLabel = "";

  const productDiscountedPrice = p => {
    return (
      p.discountedPrice +
      p.count *
        p.discounts.reduce((a, b) => {
          return a + b.discountedAmount;
        }, 0)
    );
  };

  return (
    <>
      <div style={{ maxWidth: 980 }} className="flex mx-auto">
        <div className="w-2/3">
          <div className="md:shadow-md md:rounded bg-white">
            <div className="p-4 border-b-4 border-neutral-100">
              <h1 className="hidden md:block md:px-2 md:pt-1 md:pb-5 text-2xl text-neutral-900 font-bold leading-none">
                My Cart
              </h1>

              <section>
                {items.map((item, index) => {
                  return (
                    <div key={index} className="mb-8">
                      <Product
                        itemId={item.lineItemId}
                        name={item.name}
                        designer={item.variant.attributes.designer?.label}
                        image={item.variant.images[0]}
                        count={item.count}
                        price={item.price}
                        discountedPrice={productDiscountedPrice(item)}
                        color={
                          item.variant.attributes.color?.label ||
                          item.variant.attributes.color
                        }
                        size={
                          item.variant.attributes.size?.label ||
                          item.variant.attributes.size
                        }
                      />
                    </div>
                  );
                })}
              </section>
            </div>

            <div className="px-4 py-5 border-b-4 border-neutral-100 md:border-0">
              <h2 className="text-lg text-neutral-900 font-bold leading-none">
                Payment Methods
              </h2>

              <div className="mt-4">💳 💳 💳</div>
            </div>
          </div>
        </div>

        <div className="w-1/3 ml-4">
          <div className="p-4 border-b-4 border-neutral-100 border-0 shadow-md md:rounded bg-white">
            <Summary
              isLoading={isLoading}
              buttonLabel={buttonLabel}
              vouchersLabel={vouchersLabel}
              onClick={() => {
                alert("BUY BUY BUY");
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FullCart;
