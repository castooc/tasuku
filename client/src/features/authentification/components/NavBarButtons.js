import { useAuth0 } from "@auth0/auth0-react";

import { LoginButton } from "./LoginButton";
import { LogoutButton } from "./LogoutButton";
import { SignupButton } from "./SignupButton";

export const NavBarButtons = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="nav-bar__buttons">
      {!isAuthenticated && (
        <>
          <SignupButton />
          <LoginButton />
        </>
      )}
      {isAuthenticated && (
        <>
          <LogoutButton />
        </>
      )}
    </div>
  );
};