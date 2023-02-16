import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
  height: 100%;
}

*, ::after, ::before {
  box-sizing: inherit;
}
body{
  width: 100%;
  margin:0;
  font-family: 'Abhaya Libre', serif;
}
`;
