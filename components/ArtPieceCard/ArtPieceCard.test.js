import { render, screen } from "@testing-library/react";
import ArtPieceCard from "./ArtPieceCard";

const artPiece = {
  name: "Orange Red and Green Abstract Painting",
  artist: "Steve Johnson",
  imageSource:
    "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
  year: "2018",
  genre: "Abstract",
  colors: ["orange", "red", "green"],
  slug: "orange-red-and-green",
};

test("Test, if there is a artpiece title.", () => {
  render(
    <ArtPieceCard artPiece={artPiece} imageWidth="150" imageHeight="200" />
  );

  expect(
    screen.getByRole("heading", {
      name: "Orange Red and Green Abstract Painting Steve Johnson",
    })
  ).toBeInTheDocument();

  expect(screen.getByText("Steve Johnson")).toBeInTheDocument();
});

test("Test, if there is an image with attribute src.", () => {
  render(
    <ArtPieceCard artPiece={artPiece} imageWidth="150" imageHeight="200" />
  );

  const img = screen.getByRole("img", {
    name: /orange red and green abstract painting by steve johnson/i,
  });

  expect(img).toBeInTheDocument();
  expect(img).toHaveAttribute(
    "src",
    expect.stringContaining("orange-red-and-green.jpg")
  );
});
