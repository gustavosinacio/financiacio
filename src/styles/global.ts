import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{ 
    --background: #222;
    --text-color: #eee;
    --dark-text-color: #333;
    
    --primary-lighter: #A1A9FE;
    --primary-light: #A16AE8;
    --primary: #4120A9;
    --accent: #F6D4D2;
    --money-positive: #3cb371;
    --money-negative: #F54D3D;

    --button-light: var(--dark-text-color);
    --max-width: 1120px;

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
      filter: brightness(1.1) 
    }
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
