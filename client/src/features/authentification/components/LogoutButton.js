import { useAuth0 } from "@auth0/auth0-react";
import { styled } from "styled-components";
import { LogOut } from "react-feather";

export const LogoutButton = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <Button onClick={handleLogout}>
      <LogOut size={24}/>
      <Text>LOG OUT</Text>
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