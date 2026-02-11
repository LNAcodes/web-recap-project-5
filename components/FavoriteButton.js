import styled from "styled-components";

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

const Button = styled.button``;
