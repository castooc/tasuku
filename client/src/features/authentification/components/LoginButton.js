import { useAuth0 } from "@auth0/auth0-react";
import { Button, Text } from "../../../styles/Button";
import { LogIn } from "react-feather";

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
    <Button onClick={handleLogin}>
      <LogIn size={30}/>
      <Text>LOG IN</Text>
    </Button>
  );
};

