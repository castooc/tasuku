import { styled } from "styled-components";

import { LoginButton } from "./LoginButton";
import { LogoutButton } from "./LogoutButton";
import { SignupButton } from "./SignupButton";

export const NavBarButtons = ({isAuthenticated}) => {

  return (
    <Wrapper>
      {!isAuthenticated && (
        <ButtonsContainer>
          <ButtonContainer>
            <SignupButton />
          </ButtonContainer>
          <ButtonContainer>
            <LoginButton />
          </ButtonContainer>
        </ButtonsContainer>
      )}
      {isAuthenticated && (
        <ButtonContainer>
          <LogoutButton />
        </ButtonContainer>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
`
const ButtonsContainer = styled.div`
  display:flex;
`

const ButtonContainer = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  font-size:0.9rem;
  margin:0 1rem;
`