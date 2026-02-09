import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

/* Styling */
const Card = styled.article`
  border: 1px solid #e5e5e5;
  border-radius: 12px;
  overflow: hidden;
  background: white;
  margin-top: 10px;
  padding: 12px;
  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  }
`;
const Title = styled.h2`
  font-size: 1rem;
  line-height: 1.2;
`;
const SubTitle = styled.span`
  color: #828282;
`;
const Details = styled.ul`
  list-style: none;
  padding: 0 12px 12px;
  margin: 0;
  display: grid;
  gap: 4px;
  font-size: 0.9rem;
`;

export default function ArtPieceCard({
  artPiece,
  imageWidth,
  imageHeight,
  href,
  showDetails = true,
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
          <Image
            className="card__image"
            src={artPiece.imageSource}
            width={imageWidth}
            height={imageHeight}
            alt={`${artPiece.name} by ${artPiece.artist}`}
          />
        </Link>
      ) : (
        <Image
          src={artPiece.imageSource}
          width={imageWidth}
          height={imageHeight}
          alt={`${artPiece.name} by ${artPiece.artist}`}
        />
      )}
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
