import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;

  header {
    margin-bottom: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h2 {
      color: var(--text-color);
    }
  }

  & > *:not(:first-child) {
    margin-top: 0.8rem;
  }

  .error-msg {
    color: red;
  }

  button[type="submit"] {
    margin-top: 1.2rem;
    padding: 1rem;
  }
`;

export const WrapperTransactionType = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  column-gap: 1rem;
`;

export const RadioBox = styled.button<RadioBoxProps>`
  padding: 0;
  border: 0;
  background: #fff;
  color: var(--text-color);
  align-self: flex-end;
  padding: 0.5rem 1rem;
  border: 1px solid var(--gray-border-color);

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: brightness(0.95);
  }

  & > * {
    margin-left: 0.5rem;
  }

  ${({ isActive, transactionType }) => {
    if (transactionType) {
      const color =
        transactionType === "deposit"
          ? "var(--money-positive-background)"
          : "var(--money-negative-background)";
      if (isActive) return `background-color: ${color}`;
    }
  }};
`;
