import * as FirebaseFirestore from "firebase/firestore";
import * as ReactFire from "reactfire";
import * as Hooks from "src/app/hooks";

export const useMyOrders = () => {
  const { data: user } = ReactFire.useUser();
  const { data: trades, status } = Hooks.useFirestoreQuery<trade[]>(
    "trades",
    [
      FirebaseFirestore.where("uid", "==", user?.uid || ""),
      FirebaseFirestore.orderBy("placedAt", "desc"),
    ],
    "tradeId"
  );
  return { status, trades };
};
