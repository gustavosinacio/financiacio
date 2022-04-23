import incomeImg from "../../../assets/income.svg";
import outcomeImg from "../../../assets/outcome.svg";
import totalImg from "../../../assets/total.svg";
import { useFirebaseTransactions } from "../../../hooks/useFirebaseTransactions";
import { SummaryCard } from "../../molecules";
import * as Styles from "./Summary.styles";

export function Summary() {
  const { transactionsTotal, depositsTotal, withdrawsTotal } =
    useFirebaseTransactions();

  return (
    <Styles.Container>
      <SummaryCard title="Receita" value={depositsTotal} icon={incomeImg} />
      <SummaryCard title="Resgate" value={-withdrawsTotal} icon={outcomeImg} />
      <SummaryCard
        title="Balanço"
        value={transactionsTotal}
        icon={totalImg}
        coloured
      />
    </Styles.Container>
  );
}
