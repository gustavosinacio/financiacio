import { Card } from "../../atoms";

export function BalanceCard({ value }: BalanceCardProps) {
  return <Card>R$ {value}</Card>;
}
