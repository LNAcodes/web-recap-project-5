// components/ListOfArtPieces/ListOfArtPieces.js

import styled from "styled-components";
import ArtPieceCard from "../ArtPieceCard/ArtPieceCard";
import FavoriteButton from "../FavoriteButton";

/* Styling */
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
`;
const ListItem = styled.li`
  margin: 0;
`;

export default function ListOfArtPieces({
  artPiecesInfo,
  onToggleFavorite,
  pieces,
}) {
  /* Bildgröße festlegen      */
  const imageWidth = 150;
  const imageHeight = 200;

  return (
    <>
      <List>
        {pieces.map((artPiece) => {
          const info = artPiecesInfo.find(
            (info) => info.slug === artPiece.slug
          );
          let isFavorite = false;
          if (info) {
            isFavorite = info.isFavorite;
          }

          return (
            <>
              <ListItem key={artPiece.slug}>
                <ArtPieceCard
                  artPiece={artPiece}
                  imageWidth={imageWidth}
                  imageHeight={imageHeight}
                  href={`/gallery/${artPiece.slug}`}
                  showDetails={false}
                />
                <FavoriteButton
                  slug={artPiece.slug}
                  isFavorite={isFavorite}
                  onToggleFavorite={onToggleFavorite}
                />
              </ListItem>
            </>
          );
        })}
      </List>
    </>
  );
}
