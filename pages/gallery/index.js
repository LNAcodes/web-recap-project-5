// pages/gallery/index.js

import ListOfArtPieces from "@/components/ListOfArtPieces/ListOfArtPieces.js";
import MetaHead from "@/components/MetaHead/MetaHead";

export default function ArtGallery({
  artPieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  return (
    <>
      <MetaHead
        title="Art Pieces | Art Gallery"
        description="List of all Art Pieces"
      />
      <main>
        <h1>Art Pieces</h1>
        <ListOfArtPieces
          pieces={artPieces}
          artPiecesInfo={artPiecesInfo}
          onToggleFavorite={onToggleFavorite}
        />
      </main>
    </>
  );
}
