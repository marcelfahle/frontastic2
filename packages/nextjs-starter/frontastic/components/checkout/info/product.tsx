import React from "react";
import { useTranslation } from "next-i18next";

import Price from "../../../../components/price";

const Product = ({ image, name, designer, count, price, discountedPrice, color, size }) => {
    const { t } = useTranslation('product');

    return (
        <div className='grid grid-cols-120-1xfr gap-x-4'>
            <div>
                <img src={image} alt='' />
            </div>

            <div>
                <div className='text-md font-bold leading-tight'>
                    {name}
                </div>

                {designer && (
                    <div className='text-sm text-neutral-600 leading-tight'>
                        {designer}
                    </div>
                )}

                {color && (
                    <div className='mt-3 text-sm text-neutral-600 leading-tight'>
                        {t('color')} {color}
                    </div>
                )}

                {size && (
                    <div className='text-sm text-neutral-600 leading-tight'>
                        {t('color')} {size}
                    </div>
                )}

                <div className='text-sm text-neutral-600 leading-tight'>
                    {t('quantity')} {count}
                </div>

                <div className='mt-3'>
                    <Price
                        variant='text-sm text-neutral-700 font-bold leading-tight'
                        value={discountedPrice || price}
                    />
                </div>
            </div>
        </div>
    )
}

export default Product
