// _app.js

import GlobalStyle from "../styles";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component
        pieces={
          pageProps
        } /*hier müssen die Daten aus dem Fetch übergeben werden*/
      <Component {...pageProps} />
    </>
  );
}
