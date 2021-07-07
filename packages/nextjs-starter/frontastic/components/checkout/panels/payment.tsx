import React from 'react'

import Summary from "../../cart/FullCart/Summary";

import PaymentMethodForm from "../forms/payment-method";

const PaymentPanel = ({ data }) => {
    //const { checkoutCart } = useCart();

    const onChangePaymentMethod = (pm) => {
        /*updateCart({
            paymentMethod: pm,
        })*/
    }

    const onNextClicked = () => {
        //if (cart.paymentMethod) {
            alert('call checkout')
            //checkoutCart()
        //}
    }

    return (
        <div className='md:grid md:gap-4 md:grid-cols-1-340 md:grid-rows-1 md:my-4 md:px-4 max-w-960px mx-auto'>
            <div className='md:shadow-md md:rounded bg-white'>                
                <div className='px-4 py-5 md:px-6 border-t-2 md:border-t-0 border-neutral-100 bg-white'>
                    <PaymentMethodForm
                        paymentMethods={data.paymentMethods}
                        onSubmit={(pm) => {
                            onChangePaymentMethod(pm)
                        }}
                    />
                </div>
            </div>

            <div className='self-baseline md:sticky md:top-0'>
                <div className='px-4 py-6 md:py-4 md:shadow-md md:rounded border-t-2 md:border-t-0 border-neutral-100 bg-white'>
                    <Summary 
                        buttonLabel='Pay'
                        onClick={onNextClicked}
                    />
                </div>
            </div>
        </div>
    )
}

export default PaymentPanel