import React from 'react';
import classnames from 'classnames';

import CheckoutTick from "../../../../components/icons/checkout-tick";

const Step = ({ current = false, completed = false, onSelect }) => {
    return (
        <div className='flex flex-col items-center' onClick={onSelect}>
            <div className={classnames({
                    'rounded-full border-2 mx-1 h-5 w-5 cursor-pointer z-10': true,
                    'bg-neutral-300 border-neutral-300': !current && !completed,
                    'bg-background-primary border-primary-500': current,
                    'bg-indigo-500 border-primary-500': completed,
                })}
            >
                {completed && <CheckoutTick />}
            </div>
        </div>
    )
}

export default Step
