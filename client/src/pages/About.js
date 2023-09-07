import React from 'react'
import Lottie from "lottie-react"
import animationData from "../assets/unorganizedBoard.json"
import { styled } from 'styled-components'

const About = () => {
  return (
    <Wrapper>
      <Container>
        <TitleContainer>
          <Title>Tasuku wishes you a happy tasking!</Title>
        </TitleContainer>
        <StickyNoteContainer>
          <StickyNoteHeader>
            <StickyNoteTitle>TASUKU IS :</StickyNoteTitle>
          </StickyNoteHeader>
          <StickyNoteContent>
            <LinedPaper>
              <Text>A Project Management Application</Text>
              <Text>An implementation of a Kanban board to better visualize and optimize workflow.</Text>
              <Text>A product of columns representing different stages of work, such as "To Do", "In Progress" and "Done."</Text>
              <Text>A collection of task items in the form of sticky notes, that are moved across said columns as they progress through the workflow.</Text>
              <Text>A tool using efficient visualization to provide support regarding tasks management and prioritization, while identifying bottlenecks.</Text>
            </LinedPaper>
          </StickyNoteContent>
        </StickyNoteContainer>
      </Container>
      <Lottie animationData={animationData}/>

      <EndNote >Tasuku wishes you a happy tasking!</EndNote>
    </Wrapper>
  )
}

export default About

const StickyNoteHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000000;
  color: #ffffff;
  padding: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const StickyNoteTitle = styled.div`
  font-weight: bold;
`;

const StickyNoteContent = styled.div`
  padding: 10px;
  background-color: #ffffff;
  border-radius: 0 0 10px 10px;
  position: relative;
`;

const LinedPaper = styled.div`
  background-image: linear-gradient(0deg, transparent 24px, rgba(0, 0, 0, 0.1) 25px, transparent 26px),
    linear-gradient(0deg, transparent 49px, rgba(0, 0, 0, 0.1) 50px, transparent 51px);
  background-size: 100% 52px;
  background-color: #ffffff;
  padding: 10px;
  margin-bottom: 10px;
`;

const Wrapper = styled.div`
  text-align: center;
  margin : 5rem;
`
const Container = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:center;
  font-family: 'IBM Plex Mono', monospace;

`
const TitleContainer = styled.div`
  border: red solid;
`
const StickyNoteContainer = styled.div`
  border: red solid;
  max-width:40rem;
  background-color: #ffffff;
  border: 2px solid #000000;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 10px;
  position: relative;
  font-family: Arial, sans-serif;
  margin-bottom: 20px;
`
const Title = styled.div`
  font-family: 'IBM Plex Mono', monospace;
  font-size:3rem;
`
const Text = styled.div`
  font-size:1.4rem;
`
const EndNote = styled.div`

`