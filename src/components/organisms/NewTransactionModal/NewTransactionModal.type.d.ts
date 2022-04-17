type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

type TransactionType = "deposit" | "withdraw";

type RadioBoxProps = {
  isActive?: boolean;
  transactionType?: TransactionType;
};
