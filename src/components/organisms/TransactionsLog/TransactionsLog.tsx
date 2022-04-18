import { useFirebaseTransaction } from "../../../hooks/useFirebaseTransactions";
import { TransactionEntry } from "../../atoms";
import * as Styles from "./TransactionsLog.styles";

export function TransactionsLog() {
  const [transactions] = useFirebaseTransaction();

  return (
    <Styles.Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor (R$)</th>
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
