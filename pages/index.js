// pages/index.js
import Spotlight from "@/components/Spotlight";
import getRandomElement from "@/utils/getRandomElement";
import useSWR from "swr";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage() {
  const {
    data: artPieces = [],
    error,
    isloading,
  } = useSWR("https://example-apis.vercel.app/api/art", fetcher);
  if (error) return <p>Error loading artworks</p>;
  if (isloading || artPieces.length === 0)
    return <p>Loading...Please wait...</p>;
  const spotlightPiece = getRandomElement(artPieces);
  if (!spotlightPiece) {
    return <p>Loading Spotlight... Please Wait...</p>;
  }
  return (
    <div>
      <h1>Gallery App</h1>
      <Link href={`/gallery/`}>Zur Gallery Page</Link>
      <Spotlight
        artist={spotlightPiece.artist}
        imageSource={spotlightPiece.imageSource}
        width={spotlightPiece.dimensions.width}
        height={spotlightPiece.dimensions.height}
      />
    </div>
  );
}
