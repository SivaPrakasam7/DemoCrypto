import * as Formik from "formik";
import * as FirebaseAuth from "firebase/auth";
import * as ReactError from "react-error-boundary";
import * as Router from "react-router-dom";
import * as Providers from "src/app/providers";
import * as Pages from "src/app/pages";

export const Main = () => {
  const auth = FirebaseAuth.getAuth(Providers.SecondaryApp);
  const errorHandler = ReactError.useErrorHandler();
  const navigate = Router.useNavigate();
  const Submit = async (
    { email }: Pick<User, "email">,
    { setSubmitting, resetForm }: Formik.FormikHelpers<Pick<User, "email">>
  ) => {
    try {
      await FirebaseAuth.sendPasswordResetEmail(auth, email);
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
      initialValues={{ email: "" }}
      validationSchema={Pages.Account.Views.email}
      onSubmit={Submit}
    >
      {() => (
        <Formik.Form>
          <Pages.Account.ForgotPassword.Views.Content />
        </Formik.Form>
      )}
    </Formik.Formik>
  );
};
