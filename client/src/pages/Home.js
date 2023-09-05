import { useAuth0 } from "@auth0/auth0-react";
import Lottie from "lottie-react"
import animationData from "../assets/animation_lm5owzo6.json"
import { styled } from "styled-components";
import { verifyExistingUser } from "../features/authentification";
// import roadtrip from "../assets/roadtrip.jpg"

const Home = () => {
  const { user, isAuthenticated } = useAuth0();
  //Verifies and creates new user if necessary
  if (isAuthenticated){
    verifyExistingUser(user, isAuthenticated);
  }

  return (
    <>
      <Wrapper>
          <ContainerText>
              <ContainerPunchLine>
                <PunchLine>UNLEASH YOUR INNER ORGANIZATIONAL GURU</PunchLine>
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
            <Lottie style={{ height: 770, width:800}} animationData={animationData}/>
          </ContainerLottie>
      </Wrapper>
    </>
  )
}
export default Home

const Wrapper = styled.div`
  display:flex;
  justify-content:space-around;
  padding-left:4rem;
`
const ContainerLottie = styled.div`
`
const ContainerText = styled.div`
  font-family: 'IBM Plex Mono', monospace;
`
const ContainerPunchLine = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin:5rem 0 3.5rem 0;
`
const PunchLine = styled.div`
  font-family: 'Recursive', sans-serif;
  font-size:2.4rem;
  font-weight:bold;
  font-style:italic;
`
const SubPunchLine = styled.div`
  font-size:1.6rem;
  font-weight:bold;
  font-style:italic;
`
const List = styled.ul`
  text-align:center;
  font-size:1.35rem;
`
const BulletPoints = styled.li`
  margin-left:3rem;
  margin-top:1rem;
  list-style-type:circle;
`