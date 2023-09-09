import { useAuth0 } from "@auth0/auth0-react";
import Lottie from "lottie-react"
import animationData from "../assets/kanbanBoard.json"
import { styled } from "styled-components";
import { verifyExistingUser } from "../features/authentification";
import mainBg from "../assets/mainBg.png";

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

          <ContainerText>
              <ContainerPunchLine>
                <PunchLine>Channel Your Inner Organizational Guru</PunchLine>
                <SubPunchLine>Your go-to for any project management need</SubPunchLine>
              </ContainerPunchLine>
            <List>
              <BulletPoints>Visual Workflow Management</BulletPoints>
              <BulletPoints>Efficient Task Tracking</BulletPoints>
              <BulletPoints>Flexibility - Simplicity</BulletPoints>
              <BulletPoints>Easy Prioritization</BulletPoints>
              <BulletPoints>Increased Productivity</BulletPoints>
              <BulletPoints>Improved Collaboration</BulletPoints>
            </List>
          </ContainerText>
          <ContainerLottie>
            <Lottie style={{ height: 500, width:750}} animationData={animationData}/>
            <Text>* FOR DEMONTRATION PURPOSES ONLY - NOT THE REAL PRODUCT *</Text>
          </ContainerLottie>
        </Container>
      </Wrapper>
    </>
  )
}
export default Home

const Wrapper = styled.div`
  background-image: url(${mainBg});
  background-repeat: no-repeat;
  background-size: 57.3rem 44rem;
`
const Container = styled.div`
  display:flex;
  background-color: rgba(255, 255, 255, 0.91);
  height:80vh;
  width:100vw;
`
const ContainerLottie = styled.div`
  margin-top:6rem;
  margin-left:1rem;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
`
const ContainerText = styled.div`
  font-family: 'IBM Plex Mono', monospace;
  padding-left:4rem;
`
const ContainerPunchLine = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin:3.5rem 0 3rem 0;
`
const PunchLine = styled.div`
  font-family: 'Caveat', cursive;
  font-size:4rem;
  font-style:italic;
`
const SubPunchLine = styled.div`
  font-size:2rem;
  font-weight:bold;
  font-style:italic;
`
const List = styled.ul`
  text-align:center;
  font-weight:bold;
  font-size:1.5rem;
`
const BulletPoints = styled.li`
  margin-left:3rem;
  margin-top:1rem;
  list-style-type:circle;
  font-style:italic;

`
const Text = styled.div`
  font-size:0.8rem;
`