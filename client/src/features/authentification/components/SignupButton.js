import { useAuth0 } from "@auth0/auth0-react";
import { styled } from "styled-components";
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
      <PlusCircle size={36}/>
    </Button>
  );
};

const Button = styled.button`
  all : unset;
`