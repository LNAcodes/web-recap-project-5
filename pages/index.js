import MetaHead from "@/components/MetaHead/MetaHead";
import ArtPieceCard from "@/components/ArtPieceCard/ArtPieceCard";
import getRandomElement from "@/utils/getRandomElement";
import { useMemo } from "react";

export default function HomePage({
  artPieces,
  artPiecesLoading,
  artPiecesError,
  artPiecesInfo,
  onToggleFavorite,
}) {
  if (artPiecesError) return <p>Error loading artworks</p>;
  if (artPiecesLoading || !artPieces || artPieces.length === 0)
    return <p>Loading...</p>;

  const spotlightPiece = useMemo(
    () => getRandomElement(artPieces),
    [artPieces]
  );

  if (!spotlightPiece) return <p>Loading Spotlight... Please Wait...</p>;

  /* Bildgröße festlegen      */
  const imageWidth = 150;
  const imageHeight = 200;

  const info = artPiecesInfo.find((i) => i.slug === spotlightPiece.slug);
  const isFavorite = info ? info.isFavorite : false;

  return (
    <>
      <MetaHead
        title="Spotlight | Art Gallery"
        description="A spotlighted random Art Piece"
      />
      <main>
        <h1>Spotlight</h1>
        <ArtPieceCard
          artPiece={spotlightPiece}
          imageWidth={imageWidth}
          imageHeight={imageHeight}
          href={`/gallery/${spotlightPiece.slug}`}
          showDetails={false}
          slug={spotlightPiece.slug}
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
        />
      </main>
    </>
  );
}
