// _app.js

import "../assets/css/main.css";
import GlobalStyle from "../styles";
import Navigation from "../components/Navigation";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
<<<<<<< HEAD
      <Component {...pageProps} />
      <Navigation />
=======
      <Component
        pieces={
          pageProps
        } /*hier müssen die Daten aus dem Fetch übergeben werden*/
      <Component {...pageProps} />
>>>>>>> ca802cf199568b32365e4af893f5cddeb248cefe
    </>
  );
}
