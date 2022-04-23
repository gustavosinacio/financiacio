import { format } from "date-fns";

import * as Styles from "./TransactionEntry.styles";

export function TransactionEntry({
  title,
  value,
  category,
  date,
}: TransactionEntryProps) {
  return (
    <Styles.Container>
      <td>{title}</td>
      <td className={value > 0 ? "deposit" : "withdraw"}>
        {Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(value)}
      </td>
      <td>{category}</td>
      {/* <td>{format(date, "MMM dd yyyy - HH:mm")}</td> */}
      <td> {Intl.DateTimeFormat("pt-BR").format(date)}</td>
    </Styles.Container>
  );
}
