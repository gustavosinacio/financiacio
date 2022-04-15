import { Summary } from "../../organisms";
import { TransactionsLog } from "../../organisms/TransactionsLog";
import * as Styles from "./Dashboard.styles";

export function Dashboard() {
  return (
    <Styles.Container>
      <Summary />
      <TransactionsLog />
    </Styles.Container>
  );
}
