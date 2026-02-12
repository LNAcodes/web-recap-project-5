// components/Header/Header.js

import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  padding: 16px 24px;
  background-color: var(--bg-color);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;

const Logo = styled(Link)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Logo href="/" aria-label="Go to Spotlight page">
        <Image
          src="/assets/images/logo-art-gallery.png"
          width={250}
          height={64}
          alt="Art Gallery"
          priority
        />
      </Logo>
    </StyledHeader>
  );
}
