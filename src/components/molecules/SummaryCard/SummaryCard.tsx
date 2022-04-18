import { useMemo } from "react";

import { formatValueTo2Decimals } from "../../../utils/functions";
import { Card } from "../../atoms";

export function SummaryCard({
  title,
  value,
  icon,
  coloured = false,
}: SummaryCardProps) {
  const cardColor = useMemo(() => {
    if (coloured) {
      if (value > 0)
        return { background: "--money-positive", text: "--white-text" };
      return { background: "--money-negative", text: "--white-text" };
    }
  }, [coloured, value]);

  return (
    <Card backgroundColor={cardColor?.background} textColor={cardColor?.text}>
      <header>
        <p>{title}</p>
        <img src={icon} alt="income" />
      </header>
      <strong>R$ {formatValueTo2Decimals(value)}</strong>
    </Card>
  );
}
