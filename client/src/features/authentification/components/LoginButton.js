import { useAuth0 } from "@auth0/auth0-react";
import { styled } from "styled-components";
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
      <LogIn size={24}/>
      <Text>LOG IN</Text>
    </Button>
  );
};
const Button = styled.button`
  all : unset;
  display:flex;
  align-items:center;
`
const Text = styled.div`
  margin : 0 1rem;
`