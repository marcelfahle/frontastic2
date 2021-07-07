import React, { useState } from 'react'

const Discount = () => {
    const [discountCode, setDiscountCode] = useState('')

    const redeemDiscount = () => {
        if (discountCode) {
            /*app.getLoader('cart')
                .redeemDiscount(discountCode)
                .then(() => {*/
                    setDiscountCode('')
                /*})
            */
        }
    }

    return (
        <>
            <div className='text-md text-neutral-900 leading-none font-bold'>
                Enter your discount code
            </div>
            <input
                type='text'
                className='form-input my-3'
                placeholder='Discount'
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
            />
            <button
                name='Apply'
                className='btn-outline btn-outline-black outline-none focus:outline-none flex ml-auto h-10'
                onClick={redeemDiscount}
            >
                Apply
            </button>
        </>
    )
}

export default Discount
