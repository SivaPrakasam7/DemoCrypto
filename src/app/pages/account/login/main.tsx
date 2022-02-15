import * as Axios from "axios";
import * as Formik from "formik";
import * as FirebaseAuth from "firebase/auth";
import * as Router from "react-router-dom";
import * as ReactFire from "reactfire";
import * as ReactError from "react-error-boundary";
import * as Providers from "src/app/providers";
import * as Pages from "src/app/pages";

export const Main = () => {
  const urlData = Router.useLocation().search;
  const mode = new URLSearchParams(urlData).get("mode");
  const oobCode = new URLSearchParams(urlData).get("oobCode");
  const apiKey = new URLSearchParams(urlData).get("apiKey");
  const secondaryAuth = FirebaseAuth.getAuth(Providers.SecondaryApp);
  const auth = ReactFire.useAuth();
  const errorHandler = ReactError.useErrorHandler();
  const navigate = Router.useNavigate();

  const Submit = async (
    { email, password }: Pick<User, "email" | "password">,
    {
      setSubmitting,
      resetForm,
    }: Formik.FormikHelpers<Pick<User, "email" | "password">>
  ) => {
    try {
      if (mode && mode === "verifyEmail") {
        const check = await Axios.default
          .post(
            `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${apiKey}`,
            { oobCode }
          )
          .then(() => {
            console.log("Email Verified");
            return false;
          })
          .catch(() => {
            errorHandler(new Error("Invalid verification link"));
            return true;
          });
        if (check) return;
      }
      const { user } = await FirebaseAuth.signInWithEmailAndPassword(
        secondaryAuth,
        email,
        password
      );
      if (!user?.emailVerified) {
        await secondaryAuth.signOut();
        await FirebaseAuth.sendEmailVerification(user);
        navigate("warning");
        return;
      }
      await secondaryAuth.signOut();
      await FirebaseAuth.signInWithEmailAndPassword(auth, email, password);
      navigate("/");
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
