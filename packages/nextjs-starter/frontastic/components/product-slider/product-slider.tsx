import Image from "next/image";
import Link from "next/link";

// import { AddToCartButton } from "../../components";

function Product({ data }) {
  const variant = data.variants[0];
  const { price, discountedPrice, images } = variant;

  const localizedPrice = (price / 100).toLocaleString("en-GB", {
    style: "currency",
    currency: "EUR"
  });

  return (
    <div className="mx-3 w-36 sm:w-48 md:w-60 xl:w-72 xl:mx-5">
      <Link href={data._url}>
        <a>
          <div className="relative flex flex-1 w-36 h-48 justify-center items-center object-contain mb-2 sm:h-72 sm:w-48 md:h-96 md:w-60 xl:w-72 xl:h-96">
            <Image
              src={images[0]}
              alt={data.name}
              objectFit="cover"
              layout="fill"
            />
          </div>
        </a>
      </Link>
      <div className="">
        <p className="text-sm font-bold leading-5 pr-1.5 text-gray-900 truncate ...">
          {data.name}
        </p>
        <p className="text-sm leading-5 text-gray-700">{localizedPrice}</p>
        {/* <AddToCartButton */}
        {/*   product={data} */}
        {/*   variant={variant} */}
        {/*   className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded" */}
        {/* > */}
        {/*   Add to cart */}
        {/* </AddToCartButton> */}
      </div>
    </div>
  );
}

export function ProductSlider({ data, stream }) {
  return (
    <div className="flex px-4 w-full overflow-x-scroll xl:px-10">
      {stream.items.map(item => (
        <Product data={item} key={item.productId} />
      ))}
    </div>
  );
}
