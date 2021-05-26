import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media (max-width: 1888px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body, input, textarea, button {
    font: 500 1rem Inter sans-serif;
    font-family: Montserrat, sans-serif;
  }

  body {
    overflow-x: hidden;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    font-family: Montserrat, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
