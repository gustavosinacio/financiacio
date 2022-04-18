import { onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

import { getFirebaseData } from "../services/firebase/transactions";
import { Transaction } from "../types";

export function useFirebaseTransaction(): [
  Transaction[],
  React.Dispatch<React.SetStateAction<Transaction[]>>,
  any
] {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [error, setError] = useState<any>();

  useEffect(() => {
    const { transactionQuery } = getFirebaseData();

    try {
      const unsubscribe = onSnapshot(transactionQuery, (snapshot) => {
        const ts = snapshot.docs.map(
          (doc) => ({ id: doc.id, ...doc.data() } as Transaction)
        );

        console.log(98210, ts.length);
        setTransactions(ts);
      });

      return unsubscribe;
    } catch (error) {
      setError(error);
    }
  }, []);

  return [transactions, setTransactions, error];
}
