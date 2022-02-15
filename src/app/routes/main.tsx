import * as Router from "react-router-dom";
import * as Pages from "src/app/pages";
import * as Layouts from "src/app/layouts";

export const Main = () =>
  Router.useRoutes([
    {
      path: "/*",
      element: <Layouts.Main.Main />,
      children: [
        {
          path: "/*",
          element: <Pages.Main.Main />,
        },
        {
          path: "coins/*",
          element: <Pages.Coins.Route />,
        },
      ],
    },
    {
      path: "account",
      element: <Router.Navigate to="login" />,
    },
    {
      path: "account/*",
      element: <Layouts.Auth.Main />,
      children: [
        {
          path: "login/*",
          element: <Pages.Account.Login.Route />,
        },
        {
          path: "register/*",
          element: <Pages.Account.Register.Route />,
        },
        {
          path: "forgot-password/*",
          element: <Pages.Account.ForgotPassword.Route />,
        },
        {
          path: "reset-password/*",
          element: <Pages.Account.ResetPassword.Route />,
        },
      ],
    },
  ]);
