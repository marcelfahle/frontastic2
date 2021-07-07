import React, { useState, useRef } from 'react'

import Stepper from './stepper'
import Panels from './panels'

import ShippingPanel from '../panels/shipping'
import OverviewPanel from '../panels/overview'
import PaymentPanel from '../panels/payment'

export default function CheckoutLayout({ data, countries, policy, isLoading }) {    
    const [current, setCurrent] = useState(0)
    const ts = useRef(null)

    const steps = [
        {
            name: 'Shipping',
            component: ShippingPanel,
        },
        {
            name: 'Overview',
            component: OverviewPanel,
        },
        {
            name: 'Payment',
            component: PaymentPanel,
        },
    ]

    return (
        <>
            <Stepper 
                steps={steps} 
                current={current} 
                setCurrent={setCurrent} 
                ref={ts} 
            />
            <Panels
                data={data}
                countries={countries}
                policy={policy}
                steps={steps}
                current={current}
                setCurrent={setCurrent}
                ref={ts}
                isLoading={isLoading}
            />
        </>
    )
}