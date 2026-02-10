import { render, screen } from "@testing-library/react";
import ListOfArtPieces from "./ListOfArtPieces";

const mockPieces = [
  {
    slug: "orange-red-and-green", // Wichtig für den Key!
    artist: "Steve Johnson",
    name: "Orange Red and Green",
    imageSource:
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
    dimensions: { width: 400, height: 400 }, // Karsten nutzt .dimensions.width
    year: "2018",
    genre: "Abstract",
    colors: ["#0f0", "#f00"],
  },
];

describe("ListOfArtPieces Component", () => {
  test("renders all art pieces as a list", () => {
    render(<ListOfArtPieces artPieces={mockPieces} />);
    screen.debug();
    const list = screen.getByRole("list");

    expect(list).toBeInTheDocument();
  });
  test("renders the correct number of list items", () => {
    render(<ListOfArtPieces artPieces={mockPieces} />);

    const listItems = screen.getAllByRole("listitem");

    expect(listItems).toBeInTheDocument();
    expect(listItems).toHaveLength(mockPieces.length);
  });
});
