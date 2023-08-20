import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
    // to return from default callback URL path to the specified page. If ommitted : redirection default is /
      appState: {
        returnTo: "/",
      },
    });
  };

  return (
    <button onClick={handleLogin}>
      Log In
    </button>
  );
};