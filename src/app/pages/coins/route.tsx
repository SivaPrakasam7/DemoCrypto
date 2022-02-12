import * as Router from "react-router-dom";
import * as Pages from "src/app/pages";

export const Route = () =>
  Router.useRoutes([
    {
      path: ":coin",
      element: <Pages.Coins.Main />,
    },
  ]);
