import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{ 
    --background: #121212;
    --text-color: #eee;
    --dark-text-color: #333;
    
    --primary-lighter: #59c88b;
    --primary-light: #60ca8f;
    --primary: #3cb371;
    --primary-dark: #339760;
    --primary-dark: #257047;

    --button-light: var(--dark-text-color);

    --button-border-radius: 0.2rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing : border-box;
    font-family: 'Quicksand', sans-serif;
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
    background: var(--background);
    color: var(--text-color);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-weight: 500;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button { 
    cursor: pointer;
    border: 0;
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
    background: var(--primary-light);
    border-radius: var(--button-border-radius);
    color: var(--button-light);

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9) 
    }
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
