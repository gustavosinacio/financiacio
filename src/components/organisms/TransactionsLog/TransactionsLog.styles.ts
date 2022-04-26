import styled, { css } from "styled-components";

import * as T from "./TransactionsLog.types";

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

export const ErrorMessage = styled.div`
  color: red;
  margin: 1rem;
`;

export const TableHead = styled.div`
  display: flex;
  align-items: center;
  * + * {
    margin-left: 0.5rem;
  }
`;

export const OrderIcon = styled.div(
  ({ order, orderBy, value }: T.OrderIconProps) => css`
    ${order === "desc" &&
    css`
      rotate: 1turn;
    `};
    border-left: 0.4rem solid transparent;
    border-right: 0.4rem solid transparent;
    border-bottom: 0.7rem solid
      ${orderBy === value ? "var(--gray-border-color)" : "transparent"};
  `
);
