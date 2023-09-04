import { useAuth0 } from "@auth0/auth0-react";
import { styled } from "styled-components";
import { verifyExistingUser } from "../features/authentification";
import roadtrip from "../assets/roadtrip.jpg"

const Home = () => {
  const { user, isAuthenticated } = useAuth0();
  //Verifies and creates new user if necessary
  if (isAuthenticated){
    verifyExistingUser(user, isAuthenticated);
  }

  return (
    <>
      <Wrapper>
        <Container>
        </Container>
      </Wrapper>
    </>

  )
}

export default Home
const Wrapper = styled.div`
  padding-top:2rem;
`
const Container = styled.div`
    display:flex;
    flex-direction : column;
    justify-content:center;
    align-items:center;

`
const Image = styled.img`
  width : 50rem;
`