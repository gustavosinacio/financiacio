import { OrderByDirection } from "firebase/firestore";

import { TransactionEnum } from "../../../types/firebase.enum";

type OrderIconProps = {
  order: OrderByDirection;
  orderBy: TransactionEnum;
  value: TransactionEnum;
};
