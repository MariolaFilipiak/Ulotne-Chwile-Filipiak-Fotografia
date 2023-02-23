import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}
body{
  max-width: 100%;
  margin:0 auto;
  font-family: 'Abhaya Libre', serif;
}
`;
