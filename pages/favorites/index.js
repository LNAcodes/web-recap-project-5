import ListOfArtPieces from "@/components/ListOfArtPieces/ListOfArtPieces";
import MetaHead from "@/components/MetaHead/MetaHead";
import styled from "styled-components";

/* Styling */
const Message = styled.p`
  color: #ccc;
`;

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

  // Favoriten Flag setzen
  let hasFavorites = false;
  if (favoritedPieces.length != 0) {
    hasFavorites = true;
  }

  return (
    <>
      <MetaHead
        title="Favorites | Art Gallery"
        description="Your saved artworks."
      />
      <main>
        <h1>{favoritedPieces.length > 0 ? "My Favorites" : "No Favorites"}</h1>
        {!hasFavorites && <Message>There are no favorites yet.</Message>}
        <ListOfArtPieces
          pieces={favoritedPieces}
          artPiecesInfo={artPiecesInfo}
          onToggleFavorite={onToggleFavorite}
        />
      </main>
    </>
  );
}
