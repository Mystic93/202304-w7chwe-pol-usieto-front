import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*,
::before,
::after {
  box-sizing: border-box;
}

html {
  font-family: Helvetica, sans-serif;
}

body {
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  font: inherit;
}

h1,
h2 {
  font-weight: bold;
}

h2 {
  font-size: 1.5rem;
}

input {
  border: none;
}

ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

button {
  font: inherit;
  border: none;
  cursor: pointer;
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  max-width: 100%;
}
`;

export default GlobalStyle;
