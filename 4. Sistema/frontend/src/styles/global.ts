import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #__next {
    width: 100%;
    min-height: 100vh;
  }

  body,
  input,
  textarea,
  button {
    font-family: 'Archivo', sans-serif;
  }
`;
