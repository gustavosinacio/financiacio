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
      <td className={value > 0 ? "deposit" : "withdraw"}>{value}</td>
      <td>{category}</td>
      <td>{format(date, "MMM dd - HH:mm")}</td>
    </Styles.Container>
  );
}
