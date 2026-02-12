// components\Spotlight\index.js

import Image from "next/image";
import styled from "styled-components";
import FavoriteButton from "../FavoriteButton";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding-left: 0;
  margin-top: 1rem;
`;
const StyledImage = styled(Image)`
  border: 10px solid white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  object-fit: cover;
`;

export default function Spotlight({
  imageSource,
  artist,
  artPiecesInfo,
  onToggleFavorite,
  slug,
}) {
  const spotlightInfo = artPiecesInfo.find((info) => info.slug === slug);

  let isFavorite = false;
  if (spotlightInfo) {
    isFavorite = spotlightInfo.isFavorite;
  }

  return (
    <StyledSection>
      <h2>{artist}</h2>
      <StyledImage
        src={imageSource}
        alt={`spotlight: ${artist}`}
        width="300"
        height="400"
      />
      <FavoriteButton
        slug={slug}
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
    </StyledSection>
  );
}
