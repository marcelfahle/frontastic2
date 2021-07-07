import React from 'react'
import { ErrorMessage as Message } from '@hookform/error-message';

const ErrorMessage = ({ errors, name, as = 'div' }) => {
    const slideDown = 'slideDown 0.4s'

    return (
        <div style={{ animation: errors[name] ? slideDown : 'none' }}>
            {errors[name] && (
                <div style={{ animation: slideDown }}>
                    <div className='arrow-up-system-error' />
                    <Message className='error-message-text-system-error' errors={errors} name={name} as={as} />
                </div>
            )}

            <style jsx global>{`
                @keyframes slideDown {
                    0% {
                        transform: scaleY(0);
                        height: 0;
                    }
                    100% {
                        transform: scaleY(1);
                        height: 32px;
                    }
                }
                
                .arrow-up-system-error {
                    width: 0;
                    height: 0;
                    border-left-width: 4px;
                    border-right-width: 4px;
                    border-left-color: transparent;
                    border-right-color: transparent;
                    border-bottom: 4px solid #c53030;
                    margin-top: .25rem;
                    margin-left: 2.5rem;
                }
                
                .error-message-text-system-error {
                    font-size: .875rem;
                    --text-opacity: 1;
                    color: #fff;
                    color: rgba(255,255,255,var(--text-opacity));
                    --bg-opacity: 1;
                    background-color: #c53030;
                    background-color: rgba(197,48,48,var(--bg-opacity));
                    padding: .5rem;
                    line-height: 1.25;
                    border-radius: .25rem;
                    width: auto;
                    display: inline-block;
                }
                
            `}
            </style>
        </div>
    )
}

export default ErrorMessage
