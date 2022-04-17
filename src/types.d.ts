import { Timestamp } from "firebase/firestore";

export type Transaction = {
  id: string;
  title: string;
  value: number;
  category: string;
  date: Timestamp;
};
