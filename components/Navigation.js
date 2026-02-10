import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="navigation" aria-label="Main navigation">
      <ul className="navigation__list">
        <li className="navigation__list-item">
          <Link href="/" aria-label="Go to Spotlight page">
            Spotlight
          </Link>
        </li>
        <li className="navigation__list-item">
          <Link href="/gallery/" aria-label="Go to Art Pieces gallery">
            Art Pieces
          </Link>
        </li>
        <li className="navigation__list-item">
          <Link href="/favorites/" aria-label="Go to Favorites page">
            Favorites
          </Link>
        </li>
      </ul>
    </nav>
  );
}
