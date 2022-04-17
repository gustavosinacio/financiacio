import { Timestamp } from "firebase/firestore";

export type Transaction = {
  id: string;
  title: string;
  value: number;
  category: string;
  date: Timestamp;
};
export type NewTransaction = {
  id?: string;
  title: string;
  value: number;
  category: string;
  date: Date;
};
