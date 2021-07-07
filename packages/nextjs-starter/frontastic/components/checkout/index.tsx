import { useCart } from '@frontastic/frontastic-js';
import { EmptyState } from '../../../components/empty-state';
import DefaultLoader from '../../../components/default-loader';

import CheckoutLayout from './layout';

import { paymentMethods } from './mock'

const Checkout = () => {
    const { data, shippingMethods } = useCart();

    const getShippingCountries = (shippingMethods) => {
        let c = []

        shippingMethods?.forEach(sm => {
            sm.rates?.forEach(rate => {
                rate.locations?.forEach(location => {
                    if (!c.includes(location.country)) {
                        c.push(location.country)
                    }
                })
            })
        })

        return c 
    }

    if (data && shippingMethods) {
        const cart = data.cart
        const shippingM = shippingMethods?.data?.shippingMethods

        if (shippingM && shippingM.length === 0) {
            return <EmptyState icon={"😿😿😿"} title={'Shipping methods are missing'} />;
        }

        const countries = getShippingCountries(shippingM)
        if (countries && countries.length === 0) {
            return <EmptyState icon={"😿😿😿"} title={'Shipping methods for your location are missing'} />;
        }

        if (cart.lineItems.length === 0) {
            return <EmptyState icon={"😿😿😿"} title={'Empty cart'} />;
        }

        const outOfStock = cart.lineItems.some((product) => product.variant.isOnStock === false)
        if (outOfStock) {
            return <EmptyState icon={"😿😿😿"} title={'Some products are out of stock'} />;
        }

        return (
            <CheckoutLayout 
                data={{
                    ...cart,
                    shippingMethods: shippingM,
                    paymentMethods: paymentMethods,
                }}
                countries={countries}
                policy={'By clicking on "Continue and pay" I agree to the Terms and conditions. I have taken note of the Cancellation policy and the Privacy policy'}
            />
        )
    } else {
        return <DefaultLoader />
    }
}

export default Checkout