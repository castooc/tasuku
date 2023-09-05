import { styled } from "styled-components";

import { LoginButton } from "./LoginButton";
import { LogoutButton } from "./LogoutButton";
import { SignupButton } from "./SignupButton";

export const NavBarButtons = ({isAuthenticated}) => {

  return (
    <>
      {!isAuthenticated && (
        <ButtonsContainer>
            <SignupButton />
            <LoginButton />
        </ButtonsContainer>
      )}
      {isAuthenticated && (
        <ButtonsContainer>
          <LogoutButton />
        </ButtonsContainer>
      )}
    </>
  );
};
const ButtonsContainer = styled.div`
  display:flex;
  align-items:center;
  font-size:1.1rem;

`
