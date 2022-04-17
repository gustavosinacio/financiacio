import { getAuth } from "firebase/auth";
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
  Unsubscribe,
} from "firebase/firestore";

import { NewTransaction, Transaction } from "../../types";

export function getFirebaseData() {
  const db = getFirestore();
  const { currentUser } = getAuth();
  const transactionCollection = collection(
    db,
    "users",
    currentUser?.uid || "",
    "transactions"
  );
  const transactionQuery = query(
    collection(db, "users", currentUser?.uid || "", "transactions"),
    orderBy("date", "desc")
  );

  return { db, user: currentUser, transactionCollection, transactionQuery };
}

export function connectTransactions(): [Transaction[], Unsubscribe] {
  const { transactionQuery } = getFirebaseData();
  let transactions: Transaction[] = [];

  const unsubscribe = onSnapshot(transactionQuery, (snapshot) => {
    transactions = snapshot.docs.map(
      (doc) => ({ id: doc.id, ...doc.data() } as Transaction)
    );
  });

  return [transactions, unsubscribe];
}

export async function getTransactions() {
  const { transactionCollection } = getFirebaseData();

  const transactiosSnapshot = await getDocs(transactionCollection);

  const parsedTransactions = transactiosSnapshot.docs.map(
    (transaction) =>
      ({
        id: transaction.id,
        ...transaction.data(),
      } as Transaction)
  );

  return parsedTransactions;
}

export async function addTransaction(transaction: NewTransaction) {
  const { transactionCollection } = getFirebaseData();

  await addDoc(transactionCollection, { ...transaction });
}
