import Lottie from "lottie-react"
import animationData from "../assets/unorganizedBoard.json"
import  aboutBg from "../assets/aboutBg.png"
import { PinkStickyNote } from "../features/pinkStickyNotes"
import { styled } from 'styled-components'

const About = () => {
  const quote = ["A Project Management Application", 
                "An implementation of a Kanban board to better visualize workflow", 
                'A product of columns representing different stages of work',
                "A collection of task items moved across columns as they progress",
                ];

  return (
    <Wrapper>
      <Container>
        <TitleContainer>
          <Title>What is Tasuku?</Title>
        </TitleContainer>
        <StickyNotesContainer>
          {quote.map((element)=>{
            return(
            <PinkStickyNote key = {element} quote = {element}/>
            )
          })}
        </StickyNotesContainer>
        <LottieContainer>
          <Lottie style={{ height: 375, width:700}} animationData={animationData}/>
          <Text>Don't be like Isabelle, use Tasuku</Text>
        </LottieContainer>
        
      </Container>
    </Wrapper>
  )
}

export default About

const Wrapper = styled.div`
  background-image: url(${aboutBg});
  background-repeat: no-repeat;
  background-size: 100rem;
  font-family: 'IBM Plex Mono', monospace;
`
const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  height:80vh;
  width:100vw;
`
const TitleContainer = styled.div`
  text-align:center;
`
const StickyNotesContainer = styled.div`
  display:flex;
  justify-content:space-around;
  margin-top:1rem;
`
const LottieContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  margin-top:2rem;
`
const Title = styled.div`
  font-family: 'IBM Plex Mono', monospace;
  font-size:3rem;
`
const Text = styled.div`
  margin-top:1rem;
  font-size:1.4rem;
  font-weight:bold;
`