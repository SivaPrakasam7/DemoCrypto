import * as FirebaseFirestore from "firebase/firestore";
import * as ReactFire from "reactfire";
import * as React from "react";

export const useTrade = (uid: string) => {
  const [status, setStatus] = React.useState<
    "intialized" | "loading" | "completed"
  >("intialized");
  const firestore = ReactFire.useFirestore();
  const tradesCollection = FirebaseFirestore.collection(
    firestore,
    `users/${uid}/trades`
  );
  const trade = async (newTrade: trade) => {
    setStatus("loading");
    await FirebaseFirestore.addDoc(tradesCollection, newTrade);
    setStatus("completed");
    setTimeout(() => setStatus("intialized"), 3000);
  };
  return { status, trade };
};
