// pages/_app.js

import useLocalStorageState from "use-local-storage-state";
import { useState } from "react";
import GlobalStyle from "../styles";
import Navigation from "../components/Navigation";

export default function App({ Component, pageProps }) {
  const initialComments = [];

  // STATE (FÜR COMMENTS) MIT LOCAL STORAGE (key = comments, opions = defaultValue)
  const [comments, setComments] = useLocalStorageState("comments", {
    // initial comments aus lib laden (wenn noch keine colors im local storage vorhanden )

    defaultValue: initialComments,
  });

  // ADD COMMENT
  const handleAddComment = (newComment) => {
    const updatedComments = [newComment, ...comments]; // alte Color Liste kopieren und neue Color hinzufügen
    setComments(updatedComments); // State setzen
    console.log(updatedComments); // Aktuellen State in der Conole ausgeben
  };
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
        handleAddComment={handleAddComment}
        comments={comments}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={handleToggleFavorite}
      />
      <Navigation />
    </>
  );
}
