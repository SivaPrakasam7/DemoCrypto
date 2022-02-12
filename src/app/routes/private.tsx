import * as Router from "react-router-dom";
import * as ReactFire from "reactfire";

export const Route = ({
  children,
  protect = false,
}: Child & { protect?: boolean }) => {
  const auth = ReactFire.useSigninCheck();
  return (auth?.data?.signedIn && protect) ||
    (!auth?.data?.signedIn && !protect) ? (
    <>{children}</>
  ) : (
    <Router.Navigate to="/" />
  );
};
