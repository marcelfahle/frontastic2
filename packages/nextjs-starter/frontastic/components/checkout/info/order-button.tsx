import React from 'react'

import Button from "../../buttons";

const OrderButton = ({ label, disabled = false, onClick, vouchersLabel }) => {
    return (
        <>
            <Button 
                name={label} 
                className='text-white w-full h-10'
                disabled={disabled} 
                onClick={onClick}
            >
                {label}
            </Button>

            {vouchersLabel && (
                <div className='mt-4 text-xs text-neutral-600 text-center'>{vouchersLabel}</div>
            )}
        </>
    )
}

export default OrderButton
