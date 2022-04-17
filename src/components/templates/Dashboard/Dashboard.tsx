import { Summary } from "../../organisms";
import { TransactionsLog } from "../../organisms";
import * as Styles from "./Dashboard.styles";

export function Dashboard() {
  return (
    <Styles.Container>
      <Summary />
      <TransactionsLog />
    </Styles.Container>
  );
}
