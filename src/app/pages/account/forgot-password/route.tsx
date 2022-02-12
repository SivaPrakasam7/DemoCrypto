import * as Router from "react-router-dom";
import * as Pages from "src/app/pages";

export const Route = () =>
  Router.useRoutes([
    {
      path: "/",
      element: <Pages.Account.ForgotPassword.Main />,
      children: [
        {
          path: "success",
          element: (
            <Pages.Account.Dialogs.AuthDialog
              title="Password Reset Link Sent!"
              message="Please check your reset your password"
            />
          ),
        },
      ],
    },
  ]);
