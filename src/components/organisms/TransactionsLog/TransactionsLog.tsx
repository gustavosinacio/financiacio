import { TransactionEntry } from "../../atoms/TransactionEntry/TransactionEntry";
import * as Styles from "./TransactionsLog.styles";

export function TransactionsLog() {
  return (
    <Styles.Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor (R$)</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <TransactionEntry
            title="Aluguel"
            value={-2200}
            category="Casa"
            date={new Date("2022-04-01")}
          />
          <TransactionEntry
            title="Payday"
            value={10.238}
            category="Trabalho"
            date={new Date("2022-04-01")}
          />
          <TransactionEntry
            title="Parcela Fluence"
            value={-1504}
            category="Carro"
            date={new Date("2022-04-09")}
          />
          <TransactionEntry
            title="Amazon - Monitor 4k"
            value={-2399}
            category="Home Office"
            date={new Date("2022-04-15")}
          />
          <TransactionEntry
            title="Amazon - Monitor 4k"
            value={-2399}
            category="Home Office"
            date={new Date("2022-04-15")}
          />
          <TransactionEntry
            title="Amazon - Monitor 4k"
            value={-2399}
            category="Home Office"
            date={new Date("2022-04-15")}
          />
          <TransactionEntry
            title="Amazon - Monitor 4k"
            value={-2399}
            category="Home Office"
            date={new Date("2022-04-15")}
          />
          <TransactionEntry
            title="Amazon - Monitor 4k"
            value={-2399}
            category="Home Office"
            date={new Date("2022-04-15")}
          />
          <TransactionEntry
            title="Amazon - Monitor 4k"
            value={-2399}
            category="Home Office"
            date={new Date("2022-04-15")}
          />
          <TransactionEntry
            title="Amazon - Monitor 4k"
            value={-2399}
            category="Home Office"
            date={new Date("2022-04-15")}
          />
          <TransactionEntry
            title="Amazon - Monitor 4k"
            value={-2399}
            category="Home Office"
            date={new Date("2022-04-15")}
          />
          <TransactionEntry
            title="Amazon - Monitor 4k"
            value={-2399}
            category="Home Office"
            date={new Date("2022-04-15")}
          />
          <TransactionEntry
            title="Amazon - Monitor 4k"
            value={-2399}
            category="Home Office"
            date={new Date("2022-04-15")}
          />
          <TransactionEntry
            title="Amazon - Monitor 4k"
            value={-2399}
            category="Home Office"
            date={new Date("2022-04-15")}
          />
          <TransactionEntry
            title="Amazon - Monitor 4k"
            value={-2399}
            category="Home Office"
            date={new Date("2022-04-15")}
          />
          <TransactionEntry
            title="Amazon - Monitor 4k"
            value={-2399}
            category="Home Office"
            date={new Date("2022-04-15")}
          />
        </tbody>
      </table>
    </Styles.Container>
  );
}
