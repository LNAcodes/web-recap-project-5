import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__list-item">
          <Link href="/">Spotlight</Link>
        </li>
        <li className="navigation__list-item">
          <Link href="/gallery/">Art Pieces</Link>
        </li>
        <li className="navigation__list-item">
          <Link href="/favorites/">Favorites</Link>
        </li>
      </ul>
    </nav>
  );
}
