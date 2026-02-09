import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const Card = styled.article`
  border: 1px solid #e5e5e5;
  border-radius: 12px;
  overflow: hidden;
  background: white;
  margin-top: 10px;
  transition:
    transform 120ms ease,
    box-shadow 120ms ease;

  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  }
`;

const Title = styled.h2`
  font-size: 1rem;
  line-height: 1.2;
  padding: 12px 12px 0;
`;

const Media = styled.div`
  padding: 12px;
`;

const Details = styled.ul`
  list-style: none;
  padding: 0 12px 12px;
  margin: 0;
  display: grid;
  gap: 4px;
  color: #444;
  font-size: 0.9rem;
`;

const LinkWrap = styled(Link)`
  display: inline-block;
`;

export default function ArtPieceCard({
  artPiece,
  imageWidth,
  imageHeight,
  href,
}) {
  const img = (
    <Image
      src={artPiece.imageSource}
      width={imageWidth}
      height={imageHeight}
      alt={artPiece.name}
      style={{ objectFit: "cover", borderRadius: 10 }}
      sizes={`${imageWidth}px`}
    />
  );

  return (
    <Card>
      <Title>{artPiece.name}</Title>

      {/* Bild nur verlinken, wenn href gesetzt wird */}
      <Media>{href ? <LinkWrap href={href}>{img}</LinkWrap> : img}</Media>

      <Details>
        <li>Artist: {artPiece.artist}</li>
        <li>Year: {artPiece.year}</li>
        <li>Genre: {artPiece.genre}</li>
        <li>Colors: {artPiece.colors.join(", ")}</li>
      </Details>
    </Card>
  );
}
