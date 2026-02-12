// styles.js

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*,
*::before,
*::after {
    box-sizing: border-box;
}

:root {
    --bg-color: #151515;
    --accent-color: #ff0000;
    --text-color: #bbb;
    --text-color-dark: #222;
}

body {
    color: var(--text-color);
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: var(--bg-color);
}

img,
picture,
video,
canvas,
svg {
    display: block;
    max-width: 100%;
}

input,
button,
textarea,
select {
    font: inherit;
}

#__next {
    flex: 1;
    display: flex;
    flex-direction: column;
}

main {
    flex: 1;
    max-width: 1100px;
    margin: 0 30px;
}

h1, h2 {
    margin-bottom: 20px;
}
h2 {
    color: #ccc;
    font-size: 18px;
}
h1 {
    font-family: Lucida, sans-serif;
    font-weight: 300;
    color: var(--accent-color);
}

`;
