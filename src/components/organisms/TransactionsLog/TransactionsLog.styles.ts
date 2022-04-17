import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    border: 1px solid var(--card-background);
    border-radius: 0.5rem;

    th {
      color: #777;
      font-weight: 400;
      font-size: 1.1rem;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }
  }
`;
