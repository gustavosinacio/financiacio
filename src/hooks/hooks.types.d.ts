type UseFirebaseTransaction = {
  transactions: Transaction[];
  setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>;
  transactionsTotal: number;
  depositsTotal: number;
  withdrawsTotal: number;
  error: any;
};
