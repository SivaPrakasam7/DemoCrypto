import * as Formik from "formik";
import * as FirebaseAuth from "firebase/auth";
import * as FirebaseFirestore from "firebase/firestore";
import * as ReactFire from "reactfire";
import * as ReactError from "react-error-boundary";
import * as Router from "react-router-dom";
import * as Providers from "src/app/providers";
import * as Pages from "src/app/pages";

export const Main = () => {
  const firestore = ReactFire.useFirestore();
  const secondaryAuth = FirebaseAuth.getAuth(Providers.SecondaryApp);
  const errorHandler = ReactError.useErrorHandler();
  const navigate = Router.useNavigate();
  const Submit = async (
    { email, password, firstName, lastName }: User,
    { setSubmitting, resetForm }: Formik.FormikHelpers<User>
  ) => {
    try {
      const { user } = await FirebaseAuth.createUserWithEmailAndPassword(
        secondaryAuth,
        email,
        password
      );
      await FirebaseAuth.updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
      });
      const userDoc = FirebaseFirestore.doc(firestore, `users/${user?.uid}`);
      await FirebaseFirestore.setDoc(userDoc, {
        email,
        firstName,
        lastName,
        balance: 10000,
      });
      await FirebaseAuth.sendEmailVerification(user);
      await secondaryAuth.signOut();
      navigate("success");
    } catch (e) {
      errorHandler(e);
    } finally {
      setSubmitting(false);
      resetForm();
    }
  };

  return (
    <Formik.Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      }}
      validationSchema={Pages.Account.Views.user
        .concat(Pages.Account.Views.email)
        .concat(Pages.Account.Views.password)}
      onSubmit={Submit}
    >
      {() => (
        <Formik.Form>
          <Pages.Account.Register.Views.Content />
        </Formik.Form>
      )}
    </Formik.Formik>
  );
};
