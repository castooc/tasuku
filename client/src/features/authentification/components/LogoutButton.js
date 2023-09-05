import { useAuth0 } from "@auth0/auth0-react";
import { Button, Text } from "../../../styles/Button";
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
      <LogOut size={30}/>
      <Text>LOG OUT</Text>
    </Button>
  );
};