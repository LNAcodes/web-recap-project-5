import { render, screen } from "@testing-library/react";
import ListOfArtPieces from "./ListOfArtPieces";

const mockPieces = [
  {
    slug: "orange-red-and-green", // Wichtig für den Key!
    artist: "Steve Johnson",
    name: "Orange Red and Green",
    imageSource:
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
  },
];

const mockInfo = [];

describe("ListOfArtPieces Component", () => {
  test("renders all art pieces as a list", () => {
    render(<ListOfArtPieces pieces={mockPieces} artPiecesInfo={mockInfo} />);
    screen.debug();
    const list = screen.getByRole("list");

    expect(list).toBeInTheDocument();
  });
  test("renders the correct number of list items", () => {
    render(<ListOfArtPieces pieces={mockPieces} artPiecesInfo={mockInfo} />);

    const listItems = screen.getAllByRole("listitem");

    expect(listItems).toHaveLength(mockPieces.length);
  });
});
