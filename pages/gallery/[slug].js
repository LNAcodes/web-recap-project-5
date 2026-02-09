// pages/gallery/[slug].js

import { useRouter } from "next/router";
import useSWR from "swr";
import Image from "next/image";

async function fetcher(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Error loading data from the API.");
  }
  return response.json();
}

export default function ArtPieceDetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  const {
    data: artPieces = [],
    isLoading,
    error,
  } = useSWR("https://example-apis.vercel.app/api/art", fetcher);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>{error.message}</h1>;

  const artPiece = artPieces.find(
    (singleArtPiece) => singleArtPiece.slug === slug
  );

  if (!artPiece) return <h1>Artwork not found</h1>;

  const targetWidth = 400;
  const targetHeight = Math.round(
    (artPiece.dimensions.height / artPiece.dimensions.width) * targetWidth
  );

  return (
    <>
      <h1>{artPiece.name}</h1>
      <p>Artist: {artPiece.artist}</p>
      <p>Year: {artPiece.year}</p>
      <p>Genre: {artPiece.genre}</p>

      <Image
        src={artPiece.imageSource}
        width={artPiece.dimensions.width}
        height={artPiece.dimensions.height}
        alt={artPiece.name}
        style={{
          width: artPiece.dimensions.width / 5,
          height: "auto",
        }}
      />
    </>
  );
}
