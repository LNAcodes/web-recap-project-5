import styled from "styled-components";

/* Styling */
const Card = styled.article`
  border: 1px solid #e5e5e5;
  border-radius: 12px;
  overflow: hidden;
  background: white;
  margin-top: 10px;
  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  }
`;
const Title = styled.h2`
  font-size: 1rem;
  line-height: 1.2;
  padding: 12px 12px 0;
`;
const Details = styled.ul`
  list-style: none;
  padding: 0 12px 12px;
  margin: 0;
  display: grid;
  gap: 4px;
  font-size: 0.9rem;
`;
const CardLink = styled.a`
  display: inline-block;
`;
const Image = styled.img`
  object-fit: cover;
  border-radius: 10;
`;

export default function ArtPieceCard({
  artPiece,
  imageWidth,
  imageHeight,
  href,
}) {
  return (
    <Card>
      <Title>{artPiece.name}</Title>
      {/* Zeige href-Link nur wenn 'href' vohanden/übergeben worden ist */}
      {href ? (
        <CardLink href={href}>
          <Image
            src={artPiece.imageSource}
            width={imageWidth}
            height={imageHeight}
            alt={`${artPiece.name} by ${artPiece.artist}`}
            sizes={`${imageWidth}px`}
          />
        </CardLink>
      ) : (
        <Image
          src={artPiece.imageSource}
          width={imageWidth}
          height={imageHeight}
          alt={`${artPiece.name} by ${artPiece.artist}`}
          sizes={`${imageWidth}px`}
        />
      )}
      <Details>
        <li>Artist: {artPiece.artist}</li>
        <li>Year: {artPiece.year}</li>
        <li>Genre: {artPiece.genre}</li>
        <li>Colors: {artPiece.colors.join(", ")}</li>
      </Details>
    </Card>
  );
}
