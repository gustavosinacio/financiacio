import { OrderByDirection } from "firebase/firestore";
import { useEffect, useState } from "react";

import { useFirebaseTransactions } from "../../../hooks/useFirebaseTransactions";
import { TransactionEnum } from "../../../types/firebase.enum";
import { TransactionEntry } from "../../atoms";
import * as Styles from "./TransactionsLog.styles";

export function TransactionsLog() {
  const [logOrderBy, setLogOrderBy] = useState<TransactionEnum>(
    TransactionEnum.DATE
  );
  const [logOrder, setLogOrder] = useState<OrderByDirection>("desc");

  const { transactions } = useFirebaseTransactions(logOrder, logOrderBy);

  function handleTableHeadClick(value: TransactionEnum) {
    if (value !== logOrderBy) {
      setLogOrderBy(value);
    }
    handleChangeLogOrder();
  }

  function handleChangeLogOrder() {
    console.log(9821, "orderChange");
    setLogOrder((oldOrder) => (oldOrder === "desc" ? "asc" : "desc"));
  }

  useEffect(() => {
    setLogOrder("asc");
  }, [logOrderBy]);

  return (
    <Styles.Container>
      <table>
        <thead>
          <tr>
            <th>
              <Styles.TableHead
                onClick={() => handleTableHeadClick(TransactionEnum.TITLE)}
              >
                <div>Título</div>
                <Styles.OrderIcon
                  order={logOrder}
                  orderBy={logOrderBy}
                  value={TransactionEnum.TITLE}
                />
              </Styles.TableHead>
            </th>
            <th>
              <Styles.TableHead
                onClick={() => handleTableHeadClick(TransactionEnum.VALUE)}
              >
                <div>Valor</div>
                <Styles.OrderIcon
                  order={logOrder}
                  orderBy={logOrderBy}
                  value={TransactionEnum.VALUE}
                />
              </Styles.TableHead>
            </th>
            <th>
              <Styles.TableHead
                onClick={() => handleTableHeadClick(TransactionEnum.CATEGORY)}
              >
                <div>Categoria</div>
                <Styles.OrderIcon
                  order={logOrder}
                  orderBy={logOrderBy}
                  value={TransactionEnum.CATEGORY}
                />
              </Styles.TableHead>
            </th>
            <th>
              <Styles.TableHead
                onClick={() => handleTableHeadClick(TransactionEnum.DATE)}
              >
                <div>Data</div>
                <Styles.OrderIcon
                  order={logOrder}
                  orderBy={logOrderBy}
                  value={TransactionEnum.DATE}
                />
              </Styles.TableHead>
            </th>
          </tr>
        </thead>

        <tbody>
          {transactions?.map(({ title, value, category, date, id }) => (
            <TransactionEntry
              key={id}
              title={title}
              value={value}
              category={category}
              date={date.toDate()}
            />
          ))}
        </tbody>
      </table>
    </Styles.Container>
  );
}
