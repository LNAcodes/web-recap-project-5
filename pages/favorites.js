import ListOfArtPieces from "@/components/ListOfArtPieces/ListOfArtPieces";

export default function FavoritesPage({
  artPieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const favoritedPieces = artPieces.filter((artPiece) => {
    const info = artPiecesInfo.find((info) => info.slug === artPiece.slug);
    if (info && info.isFavorite) {
      return true;
    }
    return false;
  });

  if (favoritedPieces.length === 0) {
    return <p>There are no favorites yet.</p>;
  }

  return (
    <>
      <h1>My Favorites</h1>
      <ListOfArtPieces
        pieces={favoritedPieces}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}
