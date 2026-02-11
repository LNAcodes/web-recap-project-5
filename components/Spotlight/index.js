import Image from "next/image";
import styled from "styled-components";
import FavoriteButton from "../FavoriteButton";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding-left: 10px;
  margin-top: 2rem;
`;
const StyledImage = styled(Image)`
  border: 10px solid white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  object-fit: contain;
  max-width: 400px;
  max-height: 70vh;
  height: auto;
  width: auto;
`;

export default function Spotlight({
  imageSource,
  artist,
  width,
  height,
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
        width={width}
        height={height}
      />
      <FavoriteButton
        slug={slug}
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
    </StyledSection>
  );
}
