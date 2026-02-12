import { render, screen } from "@testing-library/react";
import Spotlight from "./index.js";

test("renders the artist name of the spotlight piece", () => {
  render(
    <Spotlight
      imageSource="https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg"
      artist="Steve Johnson"
      slug="orange-red-and-green"
      artPiecesInfo={[]}
      onToggleFavorite={() => {}}
      width="150"
      height="200"
    />
  );
  const artistELement = screen.getByRole("heading", { name: /steve johnson/i });

  expect(artistELement).toBeInTheDocument();
});

test("render the spotlight image", () => {
  render(
    <Spotlight
      imageSource="https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg"
      artist="Steve Johnson"
      slug="orange-red-and-green"
      artPiecesInfo={[]}
      onToggleFavorite={() => {}}
      width="150"
      height="200"
    />
  );
  const imageElement = screen.getByRole("img", {
    name: /spotlight: steve johnson/i,
  });

  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveAttribute(
    "src",
    expect.stringContaining("orange-red-and-green.jpg")
  );
});
