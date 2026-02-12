// pages/index.js
import MetaHead from "@/components/MetaHead/MetaHead";
import Spotlight from "@/components/Spotlight";
import getRandomElement from "@/utils/getRandomElement";
import { useMemo } from "react";

export default function HomePage({
  artPieces,
  artPiecesLoading,
  artPiecesError,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const spotlightPiece = useMemo(() => {
    if (!artPieces || artPieces.length === 0) return null;
    return getRandomElement(artPieces);
  }, [artPieces]);
  if (artPiecesError) return <p>Error loading artworks</p>;
  if (artPiecesLoading || spotlightPiece.length === 0) return <p>Loading...</p>;

  if (!spotlightPiece) {
    return <p>Loading Spotlight... Please Wait...</p>;
  }
  return (
    <>
      <MetaHead
        title="Spotlight | Art Gallery"
        description="A spotlighted random Art Piece"
      />
      <main>
        <h1>Spotlight</h1>
        <Spotlight
          artist={spotlightPiece.artist}
          imageSource={spotlightPiece.imageSource}
          slug={spotlightPiece.slug}
          artPiecesInfo={artPiecesInfo}
          onToggleFavorite={onToggleFavorite}
        />
      </main>
    </>
  );
}
