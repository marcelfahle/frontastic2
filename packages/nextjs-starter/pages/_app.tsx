import "tailwindcss/tailwind.css"

import { FrontasticProvider } from "@frontastic/frontastic-js"

function FrontasticStarter({ Component, pageProps }) {
    return (
        <FrontasticProvider
            frontasticUrl="https://demo-show.frontastic.io"
            frontasticKey="API_KEY"
        >
            <Component {...pageProps} />
        </FrontasticProvider>
    )
}

export default FrontasticStarter
