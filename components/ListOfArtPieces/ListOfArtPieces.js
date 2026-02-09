// components/ListOfArtPieces/ListOfArtPieces.js

import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

/* Styling List                 */
const List = styled.ul`
  padding: 0;
  margin: 0;
`;

/* Styling ListItem             */
const ListItem = styled.li`
  list-style: none;
  border-bottom: 1px solid #ccc;
`;

/* API Fetch Funktion              */
async function fetcher(url) {
  const response = await fetch(url);
  if (!response.ok) {
    // Fhlermeldung
    throw new Error("Error loading data from the API.");
  }
  return response.json();
}

export default function ListOfArtPieces() {
  /* Calling der API Fetch Funktion per SWR URL übergabe      */
  const {
    data: artPieces = [],
    isLoading,
    error,
  } = useSWR("https://example-apis.vercel.app/api/art", fetcher);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>{error.message}</h1>;
  console.log(artPieces[0]);

  return (
    <>
      <List>
        {artPieces.map((artPiece) => (
          <ListItem key={artPiece.slug} className="listItem">
            <p>Artist: {artPiece.artist}</p>
            <p>Name: {artPiece.name}</p>
            <Link href={`/gallery/${artPiece.slug}`}>
              <Image
                src={artPiece.imageSource}
                width={artPiece.dimensions.width}
                height={artPiece.dimensions.height}
                alt={artPiece.name}
                style={{
                  width: artPiece.dimensions.width / 10,
                  height: "auto",
                }}
              />
            </Link>
            <p>Year: {artPiece.year}</p>
            <p>Genre: {artPiece.genre}</p>
            <p>Colors: {artPiece.colors.join(", ")}</p>
          </ListItem>
        ))}
      </List>
    </>
  );
}
