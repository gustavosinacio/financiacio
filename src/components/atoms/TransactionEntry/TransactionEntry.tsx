export function TransactionEntry({
  title,
  value,
  category,
  date,
}: TransactionEntryProps) {
  return (
    <tr>
      <td>{title}</td>
      <td className={value > 0 ? "deposit" : "withdraw"}>{value}</td>
      <td>{category}</td>
      <td>{date.toDateString()}</td>
    </tr>
  );
}
