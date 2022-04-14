import { SummaryCard } from "../../molecules/SummaryCard";

import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

import * as Styles from "./Summary.styles";

export function Summary() {
  return (
    <Styles.Container>
      <SummaryCard title="Entradas" value={1000} icon={incomeImg} />
      <SummaryCard title="Saídas" value={-500} icon={outcomeImg} />
      <SummaryCard title="Total" value={500} icon={totalImg} coloured />
    </Styles.Container>
  );
}
