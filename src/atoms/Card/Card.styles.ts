import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  border: 1px solid var(--background);
  border-radius: 0.25rem;

  background: var(--background);

  &:hover {
    border: 1px solid var(--text-color);
  }
`;
