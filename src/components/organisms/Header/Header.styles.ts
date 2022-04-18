import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--primary);
  padding: 2rem 1rem 8rem;
`;

export const CentralizedContent = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    * + * {
      margin-left: 1rem;
    }
  }
`;
