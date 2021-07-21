import "tailwindcss/tailwind.css";

import "./app.css";

import { FrontasticProvider } from "@frontastic/frontastic-js";
import { appWithTranslation } from 'next-i18next';

function FrontasticStarter({ Component, pageProps }) {
  return (
    <FrontasticProvider
      frontasticUrl="https://demo-show.frontastic.io"
      frontasticKey="API_KEY"
    >
      <Component {...pageProps} />
    </FrontasticProvider>
  );
}

export default appWithTranslation(FrontasticStarter);
