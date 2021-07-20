import React from 'react'
import { useRouter } from 'next/router'

const LocaleSwitcher = ({ className }) => {
    const router = useRouter();

    return (
        <select
            className={`${className} uppercase`}
            value={router.locale}
            onChange={(event) => {
                router.push(router.asPath, router.asPath, { locale: event.target.value })
            }}
        >
            {router.locales.map((locale, i) => {
                return (
                    <option key={i} value={locale}>
                        {locale.substring(0, 2)}
                    </option>
                )
            })}
        </select>
    )
}

export default LocaleSwitcher
