// components/ListOfArtPieces/ListOfArtPieces.js

import styled from "styled-components";
import ArtPieceCard from "../ArtPieceCard/ArtPieceCard";

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
        {/* mappe im übergebenen array 'pieces' über alle einträge 'artPiece'  */}
        {pieces.map((artPiece) => {
          const info = artPiecesInfo.find(
            // suche im aktuellen 'artPiece' nach einem Eintrag mit gleichen 'slug' und gebe ihn als objekt zurück
            // wenn kein übereinstimmender Eintrag gefunden wird, wird "undefined" zurückgegeben
            (info) => info.slug === artPiece.slug
          );
          let isFavorite = false;
          // wenn info true (nicht 'undefined')
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
