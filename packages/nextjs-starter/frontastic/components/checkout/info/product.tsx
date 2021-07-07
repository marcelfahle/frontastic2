import React from 'react'

import Price from '../../../../components/price'

const Product = ({ image, name, designer, count, price, discountedPrice, color, size }) => {
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
                        Color {color}
                    </div>
                )}

                {size && (
                    <div className='text-sm text-neutral-600 leading-tight'>
                        Size {size}
                    </div>
                )}

                <div className='text-sm text-neutral-600 leading-tight'>
                    Quantity {count}
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
