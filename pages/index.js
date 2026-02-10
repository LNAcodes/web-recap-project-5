// pages/index.js
import Spotlight from "@/components/Spotlight";
import getRandomElement from "@/utils/getRandomElement";

<<<<<<< HEAD
import Link from "next/link";

export default function HomePage({ pieces }) {
  console.log("Was ist in pieces?", pieces);
  const spotlightPiece = getRandomElement(pieces);
  if (!spotlightPiece) {
    return <p>Loading... Please Wait...</p>;
  }
  return (
    <div>
      <h1>Gallery App (web-recap-project-5)</h1>
      <Link href={`/gallery/`}>Zur Gallery Page</Link>
      <Spotlight
        artist={spotlightPiece.artist}
        imageSource={spotlightPiece.imageSource}
      />
=======
export default function HomePage() {
  return (
    <div>
      <h1>Gallery App (web-recap-project-5)</h1>
>>>>>>> main
    </div>
  );
}
