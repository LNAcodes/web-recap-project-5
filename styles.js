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

main {
  max-width: 1100px;
  margin: 0 auto;
  padding: 24px;
}
h1, h2 {
    margin-bottom: 20px;
}

`;
