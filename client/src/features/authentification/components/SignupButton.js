import { useAuth0 } from "@auth0/auth0-react";
import { Button, Text } from "../../../styles/Button";
import { PlusCircle } from "react-feather";

export const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/",
      },
      authorizationParams: {
        screen_hint: "signup",
      },
    });
  };

  return (
    <Button onClick={handleSignUp}>
      <PlusCircle size={30}/>
      <Text>SIGN IN</Text>
    </Button>
  );
};