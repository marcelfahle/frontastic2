import React from 'react'
//import { useSelector } from 'react-redux'

const Price = ({ value, className = '', variant = '', currency: variantCurrency }) => {
    /*const { locale, currency } = useSelector((state) => {
        return {
            locale: state.app.context.locale.replace('_', '-').split('@')[0],
            currency: variantCurrency || state.app.context.currency,
        }
    })*/

    const locale = 'en-EN'
    const currency = 'EUR'

    return (
        <span className={`${variant} ${className}`}>
            {(value / 100).toLocaleString(locale, { style: 'currency', currency })}
        </span>
    )
}

export default Price
