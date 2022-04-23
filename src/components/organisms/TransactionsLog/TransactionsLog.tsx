import { useState } from "react";

import { useFirebaseTransactions } from "../../../hooks/useFirebaseTransactions";
import { TransactionEntry } from "../../atoms";
import * as Styles from "./TransactionsLog.styles";

export function TransactionsLog() {
  const [logOrderBy, setLogOrderBy] = useState<string>("date");
  const [logOrder, setLogOrder] = useState<string>("desc");

  const { transactions } = useFirebaseTransactions(logOrderBy);

  function handleTableHeadClick(value: string) {
    setLogOrderBy(value);
  }

  return (
    <Styles.Container>
      <table>
        <thead>
          <tr>
            <th>
              <div onClick={() => handleTableHeadClick("title")}>Título</div>
            </th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions?.map(({ title, value, category, date, id }) => (
            <TransactionEntry
              key={id}
              title={title}
              value={value}
              category={category}
              date={date.toDate()}
            />
          ))}
        </tbody>
      </table>
    </Styles.Container>
  );
}
