import { onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

import { getFirebaseData } from "../../../services/firebase/transactions";
import { Transaction } from "../../../types";
import { TransactionEntry } from "../../atoms";
import * as Styles from "./TransactionsLog.styles";

export function TransactionsLog() {
  const [transactions, setTransactions] = useState<Transaction[]>();

  useEffect(() => {
    const { transactionQuery } = getFirebaseData();

    return onSnapshot(transactionQuery, (snapshot) => {
      const ts = snapshot.docs.map(
        (doc) => ({ id: doc.id, ...doc.data() } as Transaction)
      );

      console.log(98210, ts.length);
      setTransactions(ts);
    });
  }, []);

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
