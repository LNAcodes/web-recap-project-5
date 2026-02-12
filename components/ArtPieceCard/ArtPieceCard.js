import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import FavoriteButton from "../FavoriteButton";

/* Styling */
const Card = styled.article`
  border-radius: 12px;
  overflow: hidden;
  background: black;
  margin-top: 10px;
  padding: 0 24px 24px 24px;
  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  }
`;

const FavoriteBadge = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;
`;

const Title = styled.h2`
  color: white;
  font-size: 1.4rem;
  line-height: 1.4;
`;

const SubTitle = styled.span`
  color: var(--text-color);
  font-size: 1.2rem;
  font-weight: 300;
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

const DetailItem = styled.li`
  margin: 10px 0 0 0;
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  padding-bottom: 8px;
  background-image: radial-gradient(circle, #444 0.05rem, transparent);
  background-size: 4px 1px;
  background-repeat: repeat-x;
  background-position: left bottom;
  span {
    font-weight: 700;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 240px;
  border-radius: 12px;
  overflow: hidden;
  margin-top: 12px;
`;

const ColorSwatches = styled.ul`
  list-style: none;
  display: flex;
  gap: 8px;
  margin: 0;
  padding: 0;
`;

const ColorDot = styled.li`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: ${(props) => props.$color};
  border: 1px solid #464646;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;

export default function ArtPieceCard({
  artPiece,
  href,
  showDetails = true,
  slug,
  isFavorite,
  onToggleFavorite,
}) {
  const image = (
    <ImageWrapper>
      <StyledImage
        src={artPiece.imageSource}
        alt={`${artPiece.name} by ${artPiece.artist}`}
        fill
        sizes="(max-width: 600px) 100vw, 600px"
        loading="lazy"
      />

      <FavoriteBadge>
        <FavoriteButton
          slug={slug}
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
        />
      </FavoriteBadge>
    </ImageWrapper>
  );

  return (
    <Card>
      <Title>
        {artPiece.name} <br />
        <SubTitle>{artPiece.artist}</SubTitle>
      </Title>

      {href ? <Link href={href}>{image}</Link> : image}

      {showDetails && (
        <Details>
          <DetailItem>
            <span>Year:</span> {artPiece.year}
          </DetailItem>
          <DetailItem>
            <span>Genre:</span> {artPiece.genre}
          </DetailItem>
          <DetailItem>
            <span>Colors:</span>
            <ColorSwatches aria-label="Artwork colors">
              {artPiece.colors.map((color) => (
                <ColorDot key={color} $color={color} title={color} />
              ))}
            </ColorSwatches>
          </DetailItem>
        </Details>
      )}
    </Card>
  );
}
