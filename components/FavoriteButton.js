// components\FavoriteButton.js

import styled from "styled-components";

const Button = styled.button`
  background: transparent;
  border: 0;
  padding: 0;
  width: 20px;
  height: 20px;
  font-size: 24px;
`;

export default function FavoriteButton({ onToggleFavorite, isFavorite, slug }) {
  return (
    <>
      {isFavorite && <Button onClick={() => onToggleFavorite(slug)}>❤️</Button>}

      {!isFavorite && (
        <Button onClick={() => onToggleFavorite(slug)}>🤍</Button>
      )}
    </>
  );
}
