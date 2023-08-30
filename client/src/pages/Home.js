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
          <Greet>Welcome to THE Trip Planner</Greet>
          <Image src={roadtrip} alt="Going on a trip!"></Image>
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
    width:100%;
    height : 100vh;
    display:flex;
    flex-direction : column;
    justify-content:center;
    align-items:center;

`
const Greet = styled.div`
  font-size:5rem;
  padding-bottom:4rem;
`
const Image = styled.img`
  width : 50rem;
`