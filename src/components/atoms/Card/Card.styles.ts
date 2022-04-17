import styled, { css } from "styled-components";

export const Container = styled.div(
  ({ backgroundColor, textColor }: StyleCardProps) => css`
    padding: 1rem 1rem;
    border-radius: 0.25rem;

    background: var(--card-background);
    color: var(--text-color);

    box-shadow: 0 0 10px 1px #ccc;

    ${backgroundColor &&
    textColor &&
    css`
      background-color: var(${backgroundColor});
      color: var(${textColor});
    `}

    header {
      p {
        font-size: 1.25rem;
      }

      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      margin-top: 1rem;
      font-size: 1.7rem;
      font-weight: 500;
      line-height: 3rem;
    }
  `
);
