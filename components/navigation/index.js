import Link from "next/link";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faImages, faHeart } from "@fortawesome/free-solid-svg-icons";

const Nav = styled.nav`
  background-color: var(--bg-color);
  height: 60px;
  position: sticky;
  bottom: 0px;
  z-index: 3;
`;
const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;
const ListItem = styled.li`
  flex: 0 0 33%;
  background-color: var(--bg-color);
`;
const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 100%;
  padding: 10px;
  text-align: center;
  color: #ccc;
  text-decoration: none;
  min-height: 44px;

  &:hover {
    color: #ff0000;
  }
`;
const Icon = styled(FontAwesomeIcon)`
  width: 20px;
  height: 20px;
  max-width: none;
  flex: 0 0 auto;
`;
const LinkText = styled.span`
  font-size: 12px;
`;

export default function Navigation() {
  return (
    <Nav aria-label="Main navigation">
      <List>
        <ListItem>
          <StyledLink href="/" aria-label="Go to Spotlight page">
            <Icon icon={faBolt} aria-hidden="true" />
            <LinkText>Spotlight</LinkText>
          </StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink href="/gallery/" aria-label="Go to Art Pieces gallery">
            <Icon icon={faImages} aria-hidden="true" />
            <LinkText>Art Pieces</LinkText>
          </StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink href="/favorites/" aria-label="Go to Favorites page">
            <Icon icon={faHeart} aria-hidden="true" />
            <LinkText>Favorites</LinkText>
          </StyledLink>
        </ListItem>
      </List>
    </Nav>
  );
}
