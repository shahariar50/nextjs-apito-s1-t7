import type { AppProps } from "next/app";
import "styles/scss/style.scss";
import "/public/fonts/flaticon/font/flaticon.css";
import "/public/fonts/icomoon/style.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
