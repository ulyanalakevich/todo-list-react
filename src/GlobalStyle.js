import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  *, ::before, ::after {
    box-sizing: inherit;
  }
  
  body {
    font-family: 'Montserrat', sans-serif;
    background-color: #ddd;
  }
`;

export default GlobalStyle;
