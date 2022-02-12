import * as Formik from "formik";
import * as Pages from "src/app/pages";

export const Main = () => {
  const Submit = (
    values: Required<Pick<User, "password" | "confirmPassword">>,
    {
      setSubmitting,
      resetForm,
    }: Formik.FormikHelpers<
      Required<Pick<User, "password" | "confirmPassword">>
    >
  ) => {
    try {
    } catch (e) {
      console.log(e);
    } finally {
      console.log(values);
      setSubmitting(false);
      resetForm();
    }
  };
  return (
    <Formik.Formik
      initialValues={{
        password: "",
        confirmPassword: "",
      }}
      validationSchema={Pages.Account.Views.password.concat(
        Pages.Account.Views.confirmPassword
      )}
      onSubmit={Submit}
    >
      {() => (
        <Formik.Form>
          <Pages.Account.ResetPassword.Views.Content />
        </Formik.Form>
      )}
    </Formik.Formik>
  );
};
