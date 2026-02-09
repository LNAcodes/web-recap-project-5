// pages/gallery/[slug].js

import { useRouter } from "next/router";
import useSWR from "swr";
import Head from "next/head";
import Link from "next/link";
import ArtPieceCard from "@/components/ArtPieceCard/ArtPieceCard";

/* Bilddaten aus der API fetchen */
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

  /* Calling der API Fetch Funktion per SWR URL übergabe */
  const {
    data: artPieces = [],
    isLoading,
    error,
  } = useSWR("https://example-apis.vercel.app/api/art", fetcher);

  /* Error Handling */
  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>{error.message}</h1>;

  /* Finde einzelnes Bild */
  const artPiece = artPieces.find(
    (singleArtPiece) => singleArtPiece.slug === slug
  );

  if (!artPiece) return <h1>Artwork not found</h1>;

  /* Bildgröße festlegen      */
  const imageWidth = 300;
  const imageHeight = 400;

  return (
    <main>
      <Head>
        <title>
          {artPiece.artist} - {artPiece.name}
        </title>
      </Head>
      <Link className="back-link" href="/gallery/">
        Back to Gallery
      </Link>
      <ArtPieceCard
        artPiece={artPiece}
        imageWidth={imageWidth}
        imageHeight={imageHeight}
      />
    </main>
  );
}
