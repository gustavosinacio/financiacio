import { BalanceCard } from "../../molecules/BalanceCard";
import { SummaryCard } from "../../molecules/SummaryCard";
import * as Styles from "./Summary.styles";

export function Summary() {
  return (
    <Styles.Container>
      <SummaryCard title="summary card 1" value={1000} />
      <SummaryCard title="summary card 2" value={-500} />
      <BalanceCard value={500} />
    </Styles.Container>
  );
}
