import React from 'react'
import classnames from 'classnames'

import EditIcon from '../../../../components/icons/edit'

const PaymentMethod = ({ payments, onClick }) => {
    return (
        <>
            <div className='mb-3 flex items-center justify-between'>
                <span className='text-xs text-neutral-600 font-bold leading-tight uppercase'>
                    Payment method
                </span>

                <span className='text-sm text-blue-500 leading-tight cursor-pointer flex items-center' onClick={onClick}>
                    Edit <EditIcon className='inline fill-current text-sm ml-2' />
                </span>
            </div>

            <div className='text-md text-neutral-900 leading-tight'>
                {payments.map((payment, i) => {
                    return (
                        <span key={i} className={classnames({ 'mt-8': i > 0 })}>
                            {payment.paymentMethod}
                        </span>
                    )
                })}
            </div>
        </>
    )
}

export default PaymentMethod
