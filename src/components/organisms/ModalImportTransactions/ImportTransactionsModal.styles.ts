import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 1rem;
    color: var(--text-color);
    text-transform: uppercase;
    font-weight: 700;
  }

  input[type="file"] {
    color: var(--text-color);
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
