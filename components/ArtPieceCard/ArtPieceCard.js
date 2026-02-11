import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import FavoriteButton from "../FavoriteButton";

/* Styling */
const Card = styled.article`
  border: 1px solid #e5e5e5;
  border-radius: 12px;
  overflow: hidden;
  background: white;
  margin-top: 10px;
  padding: 24px;
  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  }
`;
const Title = styled.h2`
  color: #222;
  font-size: 1rem;
  line-height: 1.2;
`;
const SubTitle = styled.span`
  color: #a5a5a5;
`;
const Details = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0 0 0;
  display: grid;
  gap: 4px;
  font-size: 0.9rem;
  position: relative;
`;
const StyledImage = styled(Image)`
  object-fit: cover;
`;

export default function ArtPieceCard({
  artPiece,
  imageWidth,
  imageHeight,
  href,
  showDetails = true,
  slug,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <Card>
      <Title>
        {artPiece.name} <br />
        <SubTitle>{artPiece.artist}</SubTitle>
      </Title>

      {/* Zeige href-Link nur wenn 'href' vohanden/übergeben worden ist */}
      {href ? (
        <Link href={href}>
          <StyledImage
            className="card__image"
            src={artPiece.imageSource}
            width={imageWidth}
            height={imageHeight}
            alt={`${artPiece.name} by ${artPiece.artist}`}
            loading="lazy"
          />
        </Link>
      ) : (
        <StyledImage
          src={artPiece.imageSource}
          width={imageWidth}
          height={imageHeight}
          alt={`${artPiece.name} by ${artPiece.artist}`}
          loading="lazy"
        />
      )}
      <FavoriteButton
        slug={slug}
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
      {showDetails && (
        <Details>
          <li>Year: {artPiece.year}</li>
          <li>Genre: {artPiece.genre}</li>
          <li>Colors: {artPiece.colors.join(", ")}</li>
        </Details>
      )}
    </Card>
  );
}
