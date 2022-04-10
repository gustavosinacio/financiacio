import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{ 
    --background: #121212;
    --text-color: #eee;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing : border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; 
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background );
    color: var(--text-color);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Quicksand';
    /* font-family: 'Quicksand', sans-serif; */
    font-weight: 500;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button { 
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
