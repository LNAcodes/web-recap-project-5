// components/FavoriteButton.js

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Button = styled.button`
  background: ${(props) =>
    props.$isFavorite ? "rgba(255, 255, 255, 0.7);" : "rgba(0, 0, 0, 0.7);"};
  border: 0;
  padding: 6px;
  width: 36px;
  height: 36px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const Icon = styled(FontAwesomeIcon)`
  width: 18px;
  height: 18px;
  color: ${(props) => (props.$isFavorite ? "red" : "white")};
`;

export default function FavoriteButton({ onToggleFavorite, isFavorite, slug }) {
  return (
    <Button
      type="button"
      onClick={(event) => {
        event.stopPropagation();
        event.preventDefault();
        onToggleFavorite(slug);
      }}
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      $isFavorite={isFavorite}
    >
      <Icon icon={faHeart} $isFavorite={isFavorite} aria-hidden="true" />
    </Button>
  );
}
