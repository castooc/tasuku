import Lottie from "lottie-react"
import animationData from "../assets/notFound.json"
import { styled } from "styled-components"

const NotFound = () => {
  return (
  <Wrapper>
      <Lottie style={{ height: 600, width:750}} animationData={animationData}/>
      <Text>~ GET BACK TO TASKING :) ~</Text>
  </Wrapper>
  )
}

export default NotFound;
const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
`
const Text = styled.div`
  font-size:2rem;
  font-weight:bold;
  font-family: 'IBM Plex Mono', monospace;


`