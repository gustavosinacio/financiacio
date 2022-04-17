import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{ 
    --background: #f2f2f2;
    --card-background: #fafafa;
    --text-color: #555;
    --white-text: #fff;
    --dark-text: #222;
    --gray-border-color: #aaa;
    
    --primary-lighter: #A1A9FE;
    --primary-light: #A16AE8;
    --primary: #4120A9;
    --accent: #F6D4D2;
    --money-positive: #3cb371;
    --money-positive-background: #3cb37130;
    --money-negative: #FF4D3D;
    --money-negative-background: #FF4D3D30;

    --button-light: var(--white-text);

    --max-width: 1120px;
    --modal-max-width: 600px;
    
    --button-border-radius: 0.2rem;
    --modal-border-radius: 0.25rem;
    --input-border-radius: 0.25rem;
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
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: uppercase;
    padding: 0.5rem 2rem;
    background: var(--money-positive);

    border-radius: var(--button-border-radius);
    color: var(--button-light);

    transition: filter 0.2s;

    &:hover {
      filter: brightness(1.1) 
    }
  }

  input {
    border: 0;
    padding: 1rem;
    font-size: 1.1rem;
    border-radius: var(--input-border-radius);
    border: 1px solid var(--gray-border-color)
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: #0008;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: var(--modal-max-width);

    padding: 3rem;
    background: var(--background);
    border-radius: var(--modal-border-radius);
    position: relative;
  }

  .react-modal-close {
    padding: 0;
    border: 0;
    background: transparent;
    align-self: flex-end;
  }
`;
