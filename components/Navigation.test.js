import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";
describe("test for exists navigation links and goals", () => {
  test("renders navigation links 'Spotlight', 'Art Pieces' and 'Favorites'", () => {
    render(<Navigation />);
    screen.debug();
    const spotlightLink = screen.getByRole("link", { name: /spotlight/i });
    const galleriyLink = screen.getByRole("link", { name: /art pieces/i });
    const favoritesLink = screen.getByRole("link", { name: /favorites/i });

    expect(spotlightLink).toBeInTheDocument();
    expect(galleriyLink).toBeInTheDocument();
    expect(favoritesLink).toBeInTheDocument();

    expect(spotlightLink).toHaveAttribute("href", "/");
    expect(galleriyLink).toHaveAttribute("href", "/gallery");
    expect(favoritesLink).toHaveAttribute("href", "/favorites");
  });
  test("has a semantic navigation landmark", () => {
    render(<Navigation />);

    const navElement = screen.getByRole("navigation");

    expect(navElement).toBeInTheDocument();
  });
});
