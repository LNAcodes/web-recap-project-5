// styles.js

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
  margin: 0;
  font-family: system-ui;
  background: #fafafa;
  color: #111;
}

/* Media defaults */
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

/* Form defaults */
input,
button,
textarea,
select {
  font: inherit;
}

main {
  max-width: 1100px;
  margin: 0 auto;
  padding: 24px;
}

h1, h2 {
    margin-bottom: 20px;
}

/* muss noch entfernt/in die Card Componente ausgelagert werden */
img.card__image {
    object-fit: cover;
}

`;
