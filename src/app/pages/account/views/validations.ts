import * as Yup from "yup";

export const email = Yup.object().shape({
  email: Yup.string().email().required("No Email provided"),
});

export const password = Yup.object().shape({
  password: Yup.string()
    .nullable()
    .min(8, "Min 8 chatracters required")
    .required("No Password provided"),
});

export const confirmPassword = Yup.object().shape({
  confirmPassword: Yup.string()
    .nullable()
    .oneOf([Yup.ref("password"), null], "Password doesn't match")
    .required("No Confirm password provided"),
});

export const user = Yup.object().shape({
  firstName: Yup.string().required("No First Name provided"),
  lastName: Yup.string().required("No Last Name provided"),
});
