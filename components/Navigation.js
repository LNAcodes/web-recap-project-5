import Link from "next/link";
import styled from "styled-components";

export default function Navigation() {
  return (
    <Nav aria-label="Main navigation">
      <List>
        <ListItem>
          <Link href="/" aria-label="Go to Spotlight page">
            Spotlight
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/gallery/" aria-label="Go to Art Pieces gallery">
            Art Pieces
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/favorites/" aria-label="Go to Favorites page">
            Favorites
          </Link>
        </ListItem>
      </List>
    </Nav>
  );
}

const Nav = styled.nav``;

const List = styled.ul``;

const ListItem = styled.li``;

const StyledLink = styled(Link)``;
