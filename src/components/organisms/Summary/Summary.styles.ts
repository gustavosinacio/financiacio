import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: 1fr;
  }

  margin-top: -6rem;
`;
