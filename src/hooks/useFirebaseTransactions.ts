import { onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

import { getFirebaseData } from "../services/firebase/transactions";
import { Transaction } from "../types";
import { roundToTwo } from "../utils/functions";

export function useFirebaseTransactions(
  order?: string
): UseFirebaseTransaction {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [error, setError] = useState<any>();

  const [transactionsTotal, setTransactionsTotal] = useState<number>(0);
  const [depositsTotal, setDepositsTotal] = useState<number>(0);
  const [withdrawsTotal, setWithdrawsTotal] = useState<number>(0);

  useEffect(() => {
    const { transactionQuery } = getFirebaseData();

    try {
      const unsubscribe = onSnapshot(transactionQuery(order), (snapshot) => {
        let transactionsSum = 0;
        let depositsSum = 0;
        let withdrawsSum = 0;

        const ts = snapshot.docs.map((doc) => {
          const transaction = { id: doc.id, ...doc.data() } as Transaction;
          const { value } = transaction;

          transactionsSum += value;
          if (value > 0) depositsSum += value;
          else withdrawsSum += value;
          return transaction;
        });

        console.log(98210, ts.length);
        setTransactions(ts);
        setTransactionsTotal(roundToTwo(transactionsSum));
        setDepositsTotal(roundToTwo(depositsSum));
        setWithdrawsTotal(roundToTwo(withdrawsSum));
      });

      return unsubscribe;
    } catch (error) {
      setError(error);
    }
  }, [order]);

  return {
    transactions,
    setTransactions,
    transactionsTotal,
    depositsTotal,
    withdrawsTotal,
    error,
  };
}
