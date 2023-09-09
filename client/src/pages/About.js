import Lottie from "lottie-react"
import animationData from "../assets/unorganizedBoard.json"
import  aboutBg from "../assets/aboutBg.png"
import {StickyNotes} from "../features/stickyNotes"
import { styled } from 'styled-components'

const About = () => {
  const quote = ["A Project Management Application", 
                "An implementation of a Kanban board to better visualize and optimize workflow", 
                'A product of columns representing different stages of work, such as "To Do", "In Progress" and "Done"',
                "A collection of task items in the form of sticky notes, that are moved across said columns as they progress through the workflow",
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
            <StickyNotes quote = {element}/>
            )
          })}
        </StickyNotesContainer>
        <LottieContainer>
          <Lottie style={{ height: 300, width:600}} animationData={animationData}/>
          <Text>Don't be like Isabelle, use Tasuku</Text>
          <EndNote>Tasuku wishes you a happy tasking!</EndNote>
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
  margin-top:2rem;
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
  font-size:1.5rem;
`
const EndNote = styled.div`
  font-size:2rem;
  font-style:italic;
  font-weight:bold;
`