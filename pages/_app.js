// pages/_app.js

import useSWR from "swr";
import useLocalStorageState from "use-local-storage-state";
import { useState } from "react";
import GlobalStyle from "../styles";
import Navigation from "../components/Navigation";

/* API Fetch Funktion */
async function fetcher(url) {
  const response = await fetch(url);
  if (!response.ok) {
    // Fehlermeldung
    throw new Error("Error loading data from the API.");
  }
  return response.json();
}

export default function App({ Component, pageProps }) {
  /* Calling der API Fetch Funktion per SWR URL übergabe */
  const {
    data: artPieces = [],
    isLoading,
    error,
  } = useSWR("https://example-apis.vercel.app/api/art", fetcher);

  // STATE (FÜR COMMENTS) MIT LOCAL STORAGE (key = comments, opions = defaultValue)
  const [comments, setComments] = useLocalStorageState("comments", {
    defaultValue: [],
  });

  // Funktion zum Hinzufügen von Kommentaren
  const handleAddComment = (newComment) => {
    const updatedComments = [newComment, ...comments]; // alte Color Liste kopieren und neue Color hinzufügen
    setComments(updatedComments); // State setzen
  };

  const [artPiecesInfo, setArtPiecesInfo] = useLocalStorageState(
    "artPiecesInfo",
    {
      defaultValue: [],
    }
  );

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
        artPieces={artPieces}
        artPiecesLoading={isLoading}
        artPiecesError={error}
        handleAddComment={handleAddComment}
        comments={comments}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={handleToggleFavorite}
      />
      <Navigation />
    </>
  );
}
