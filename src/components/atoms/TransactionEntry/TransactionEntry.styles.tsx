import styled from "styled-components";

export const Container = styled.tr`
  td {
    text-align: left;
    padding: 1rem 2rem;
    background: var(--card-background);

    &.deposit {
      color: var(--money-positive);
    }

    &.withdraw {
      color: var(--money-negative);
    }

    transition: all 0.3s;

    &:hover {
      padding: 1.5rem 2rem;
    }
  }
`;
