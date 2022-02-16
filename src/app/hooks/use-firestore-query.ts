import * as FirebaseFirestore from "firebase/firestore";
import * as ReactFire from "reactfire";

export const useFirestoreQuery = <T>(
  collectionName: string,
  queryConstraint: FirebaseFirestore.QueryConstraint[],
  id?: string
) => {
  const firestore = ReactFire.useFirestore();
  const query = FirebaseFirestore.query<T>(
    FirebaseFirestore.collectionGroup(
      firestore,
      collectionName
    ) as FirebaseFirestore.CollectionReference<T>,
    ...queryConstraint
  );
  return ReactFire.useFirestoreCollectionData<T>(query, {
    idField: id || "id",
  });
};
