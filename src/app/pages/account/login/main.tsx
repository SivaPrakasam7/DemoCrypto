import * as Formik from "formik";
import * as FirebaseAuth from "firebase/auth";
import * as ReactFire from "reactfire";
import * as ReactError from "react-error-boundary";
import * as Providers from "src/app/providers";
import * as Pages from "src/app/pages";

export const Main = () => {
  const secondaryAuth = FirebaseAuth.getAuth(Providers.SecondaryApp);
  const auth = ReactFire.useAuth();
  const errorHandler = ReactError.useErrorHandler();

  const Submit = async (
    { email, password }: Pick<User, "email" | "password">,
    {
      setSubmitting,
      resetForm,
    }: Formik.FormikHelpers<Pick<User, "email" | "password">>
  ) => {
    try {
      const { user } = await FirebaseAuth.signInWithEmailAndPassword(
        secondaryAuth,
        email,
        password
      );
      if (user?.emailVerified) {
        await FirebaseAuth.sendEmailVerification(user);
        return;
      }
      await secondaryAuth.signOut();
      await FirebaseAuth.signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
      errorHandler(e);
    } finally {
      setSubmitting(false);
      resetForm();
    }
  };

  return (
    <Formik.Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Pages.Account.Views.email.concat(
        Pages.Account.Views.password
      )}
      onSubmit={Submit}
    >
      {() => (
        <Formik.Form>
          <Pages.Account.Login.Views.Content />
        </Formik.Form>
      )}
    </Formik.Formik>
  );
};
