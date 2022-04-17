import incomeImg from "../../../assets/income.svg";
import outcomeImg from "../../../assets/outcome.svg";
import totalImg from "../../../assets/total.svg";
import { SummaryCard } from "../../molecules/SummaryCard";
import * as Styles from "./Summary.styles";

export function Summary() {
  return (
    <Styles.Container>
      <SummaryCard title="Entradas" value={10238} icon={incomeImg} />
      <SummaryCard title="Saídas" value={-6103} icon={outcomeImg} />
      <SummaryCard title="Total" value={4135} icon={totalImg} coloured />
    </Styles.Container>
  );
}
