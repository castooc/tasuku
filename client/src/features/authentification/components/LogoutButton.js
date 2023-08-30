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
      <LogOut size={36}/>
    </Button>
  );
};
const Button = styled.button`
  all : unset;
`