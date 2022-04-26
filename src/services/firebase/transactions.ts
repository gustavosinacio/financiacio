import { getAuth } from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  getFirestore,
  orderBy as firebaseOrderBy,
  OrderByDirection,
  query,
  writeBatch,
} from "firebase/firestore";

import { Transaction } from "../../types";

export function getFirebaseData() {
  const db = getFirestore();
  const { currentUser } = getAuth();
  const transactionCollection = collection(
    db,
    "users",
    currentUser?.uid || "",
    "transactions"
  );
  const transactionQuery = (
    orderBy = "date",
    order: OrderByDirection = "desc"
  ) =>
    query(
      collection(db, "users", currentUser?.uid || "", "transactions"),
      firebaseOrderBy(orderBy, order)
    );

  return { db, user: currentUser, transactionCollection, transactionQuery };
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

export async function addMultipleTransactions(transactions: NewTransaction[]) {
  const { db, user } = getFirebaseData();
  const batch = writeBatch(db);

  transactions.forEach((transaction) => {
    if (transaction.value && transaction.title) {
      batch.set(
        doc(
          db,
          "users",
          user?.uid || "",
          "transactions",
          transaction.id || Math.random().toString()
        ),
        transaction
      );
    }
  });

  try {
    await batch.commit();
  } catch (error) {
    console.log(error);
  }
}
