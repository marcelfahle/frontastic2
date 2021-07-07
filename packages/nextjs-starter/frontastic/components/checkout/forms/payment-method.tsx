import React from 'react'
import classnames from 'classnames'
import { useForm } from 'react-hook-form'

const PaymentMethod = ({ paymentMethods, onSubmit }) => {
    const { register, getValues /*, setValue*/ } = useForm({
        mode: 'onChange',
        /* defaultValues: {
            payment: defaultValues ? defaultValues.paymentMethod : null,
        }, */
    })

    const onChange = () => {
        onSubmit(getValues())
    }

    return (
        <form onChange={onChange}>
            <div className='mb-4 text-xs text-neutral-600 font-bold leading-tight uppercase'>
                Payment method
            </div>

            {paymentMethods?.map((pm, i) => {
                return (
                    <div
                        key={i}
                        className={classnames('px-4 py-3 border border-neutral-400 rounded flex items-center h-12 cursor-pointer', {
                            'mt-2': i > 0,
                        })}
                        onClick={() => {
                            //setValue('type', pm.type)

                            onChange()
                        }}
                    >
                        <input
                            id={`payment-method-${i}`}
                            type='radio'
                            name='type'
                            className='mr-3'
                            value={pm.type}
                            {...register(`payment-method-${i}`)}
                        />
                        {pm.name}
                    </div>
                )
            })}
        </form>
    )
}

export default PaymentMethod
