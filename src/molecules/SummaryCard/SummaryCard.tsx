import { Card } from "../../atoms";

export function SummaryCard({ title, value }: SummaryCardProps) {
  return (
    <Card>
      <header>{title}</header>
      <text>R$ {value}</text>
    </Card>
  );
}
