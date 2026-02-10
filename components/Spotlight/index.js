import Image from "next/image";
import styled from "styled-components";

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

export default function Spotlight({ imageSource, artist, width, height }) {
  return (
    <StyledSection>
      <h2>{artist}</h2>

      <StyledImage
        src={imageSource}
        alt={`spotlight: ${artist}`}
        width={width}
        height={height}
      />
    </StyledSection>
  );
}
