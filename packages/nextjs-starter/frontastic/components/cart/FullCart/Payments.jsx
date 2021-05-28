import React from 'react'

import { ReactComponent as VisaIcon } from '../../../../../icons/visa.svg'
import { ReactComponent as PayPalIcon } from '../../../../../icons/paypal.svg'
import { ReactComponent as MastercardIcon } from '../../../../../icons/mastercard.svg'

const Payments = () => {
    return (
        <section className='flex'>
            <MastercardIcon className='mr-3 w-9 h-6 text-primary-500 fill-current' />
            <VisaIcon className='mr-3 w-9 h-6 text-primary-500 fill-current' />
            <PayPalIcon className='w-9 h-6 text-primary-500 fill-current' />
        </section>
    )
}

export default Payments
