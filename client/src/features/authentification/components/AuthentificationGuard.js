import { withAuthenticationRequired } from "@auth0/auth0-react";
import React from "react";
import LoadingPage from "../../../components/LoadingPage";

export const AuthenticationGuard = ({ component }) => {
  const Component = withAuthenticationRequired(component, {
    //onRedirecting : renders the specified component while your React application redirects the user to the login page.
    onRedirecting: () => (
      <div>
        <LoadingPage />
      </div>
    ),
  });

  return <Component />;
};