import * as Router from "react-router-dom";
import * as Pages from "src/app/pages";

export const Route = () =>
  Router.useRoutes([
    {
      path: "/",
      element: <Pages.Account.Register.Main />,
      children: [
        {
          path: "success",
          element: (
            <Pages.Account.Dialogs.AuthDialog
              title="Registration successfull!"
              message="Please check your email to verify"
            />
          ),
        },
      ],
    },
  ]);
