import { useState } from "react"

// import StarRating from './StarRating.tsx';

import Price from "../../product/price"
import Button from "../../buttons"

import {Dropdown} from "../../../../components"

// import ColorSelector from "./selector/color-selector"
// import SizeSelector from "./sSelectors/size-selector"

const ProductData = ({
    name,
    variants,
    selectedVariant,
    onVariantChange,
    handleAddToCart,
    handleAddToWishlist,
    handleRemoveFromWishlist,
    wishlisted = false,
}) => {
    /* preventing showing LoaderButton on initial page load */
    const [showLoader, setShowLoader] = useState(false)
    const isLoading = false
    const loading = showLoader && isLoading

    return (
        <div className="md:w-2/3">
            <div className="text-xl font-bold text-neutral-900 ">{name}</div>

            <Price
                className="text-lg text-neutral-700 py-1"
                value={selectedVariant.discountedPrice || selectedVariant.price}
                currency={selectedVariant.currency}
            />

            {/* <StarRating /> */}

            {selectedVariant.attributes.color && (
                <Dropdown
                    value={selectedVariant.attributes.color?.label || selectedVariant.attributes.color}
                    className="mb-4"
                    options={variants}
                    onChange={onVariantChange}
                    formatOptionLabel={(option: any) => option.attributes.color ? option.attributes.color.label : ""}
                    label="Color"

                />
            )}

            {selectedVariant.attributes.size && (
                <Dropdown
                    value={selectedVariant.attributes.size?.label || selectedVariant.attributes.size}
                    className="mb-4"
                    options={variants}
                    onChange={onVariantChange}
                    formatOptionLabel={(option: any ) => option.attributes.size?.label || option.attributes.size}
                    label="Size"
                />
            )}


            <div className="flex pb-6">
                <Button
                    className={`btn bg-primary-600 text-white w-full mr-2 h-10 ${
                        loading ? "cursor-default" : ""
                    }`}
                    onClick={() => {
                        handleAddToCart(selectedVariant, 1)
                        // setShowLoader(true);
                        // handleAddToCart(selectedVariant).then(() => setShowLoader(false));
                    }}
                    disabled={loading}
                >
                    {loading ? <p>loading</p> : "add to cart"}
                </Button>
                <Button
                    className="flex items-center justify-center text-neutral-900 border border-neutral-900 w-10 rounded outline-none focus:outline-none"
                    icon={wishlisted ? "🖤" : "❤️"}
                    onClick={() => {
                        !wishlisted && handleAddToWishlist()
                        wishlisted && handleRemoveFromWishlist()
                    }}
                />
            </div>
        </div>
    )
}
export default ProductData
