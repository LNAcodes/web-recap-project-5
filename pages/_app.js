// pages/_app.js
import { useState } from "react";
import GlobalStyle from "../styles";
import Navigation from "../components/Navigation";

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);
  function handleToggleFavorite(slug) {
    const isAlreadyFavorite = artPiecesInfo.find((info) => info.slug === slug);
    if (isAlreadyFavorite) {
      const updatedInfo = artPiecesInfo.filter((info) => info.slug !== slug);
      setArtPiecesInfo(updatedInfo);
    } else {
      const newFavorite = { slug: slug, isFavorite: true };
      setArtPiecesInfo([newFavorite, ...artPiecesInfo]);
    }
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={handleToggleFavorite}
      />
      <Navigation />
    </>
  );
}
