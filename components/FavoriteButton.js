// components\FavoriteButton.js

import styled from "styled-components";

const Button = styled.button`
  background: transparent;
  border: 0;
  padding: 0;
  width: 20px;
  height: 20px;
  font-size: 24px;
  &:hover {
    transform: scale(1.3);
  }
`;

export default function FavoriteButton({ onToggleFavorite, isFavorite, slug }) {
  return (
    <Button type="Button" onClick={() => onToggleFavorite(slug)}>
      {isFavorite ? "❤️" : "🤍"}
    </Button>
  );
}
