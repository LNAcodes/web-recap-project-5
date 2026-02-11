// pages/gallery/index.js

import ListOfArtPieces from "@/components/ListOfArtPieces/ListOfArtPieces.js";
import Head from "next/head";
import FavoriteButton from "@/components/FavoriteButton";

export default function ArtGallery({ artPiecesInfo, onToggleFavorite }) {
  return (
    <main>
      <Head>
        <title>Art Gallery</title>
      </Head>
      <h1>Art Gallery</h1>
      <ListOfArtPieces
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
      />
    </main>
  );
}
