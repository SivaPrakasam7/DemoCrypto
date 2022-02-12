import * as FirebaseApp from "firebase/app";
import * as FirebaseAuth from "firebase/auth";
import * as FirebaseFirestore from "firebase/firestore";
import * as FirebaseStorage from "firebase/storage";
import * as ReactFire from "reactfire";
import * as Constants from "src/constants";

export const SecondaryApp = FirebaseApp.initializeApp(Constants.firebaseConfig);

const SubProvider = ({ children }: Child) => {
  const app = ReactFire.useFirebaseApp();
  const auth = FirebaseAuth.getAuth(app);
  const firestore = FirebaseFirestore.getFirestore(app);
  const storage = FirebaseStorage.getStorage(app);
  return (
    <ReactFire.AuthProvider sdk={auth}>
      <ReactFire.FirestoreProvider sdk={firestore}>
        <ReactFire.StorageProvider sdk={storage}>
          {children}
        </ReactFire.StorageProvider>
      </ReactFire.FirestoreProvider>
    </ReactFire.AuthProvider>
  );
};

export const FirebaseProvider = ({ children }: Child) => (
  <ReactFire.FirebaseAppProvider firebaseConfig={Constants.firebaseConfig}>
    <SubProvider>{children}</SubProvider>
  </ReactFire.FirebaseAppProvider>
);
