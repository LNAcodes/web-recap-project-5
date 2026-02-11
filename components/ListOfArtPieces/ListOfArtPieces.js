// components/ListOfArtPieces/ListOfArtPieces.js

import useSWR from "swr";
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

/* API Fetch Funktion */
async function fetcher(url) {
  const response = await fetch(url);
  if (!response.ok) {
    // Fehlermeldung
    throw new Error("Error loading data from the API.");
  }
  return response.json();
}

export default function ListOfArtPieces({ artPiecesInfo, onToggleFavorite }) {
  /* Calling der API Fetch Funktion per SWR URL übergabe */
  const {
    data: artPieces = [],
    isLoading,
    error,
  } = useSWR("https://example-apis.vercel.app/api/art", fetcher);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>{error.message}</h1>;

  /* Bildgröße festlegen      */
  const imageWidth = 150;
  const imageHeight = 200;

  return (
    <>
      <List>
        {artPieces.map((artPiece) => {
          const info = artPiecesInfo.find(
            (info) => info.slug === artPiece.slug
          );
          let isFavorite = false;
          if (info) {
            isFavorite = info.isFavorite;
          }
          return (
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
          );
        })}
      </List>
    </>
  );
}
