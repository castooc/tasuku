import React from 'react'
import { styled } from 'styled-components'

const About = () => {
  return (
    <Wrapper>
      <p>Welcome to the trip planner :).</p>
      <p> This simple application has been created to help in the planning of a trip. </p>
      <p >It also serves as a logging tool to keep track of trips done </p>
    </Wrapper>
  )
}

export default About

const Wrapper = styled.div`
  text-align: center;
  font-size:3rem;
  margin : 2rem;

`