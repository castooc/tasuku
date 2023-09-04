import React from 'react'
import { styled } from 'styled-components'

const About = () => {
  return (
    <Wrapper>
      <p>Welcome to Tasuku.</p>
      <p> This simple application implements a Kanban board.</p>
      <p>A Kanban board is a visual tool used in project management and workflow optimization to represent work items, tasks, or processes. </p>
      <p>It typically consists of columns representing different stages or states of work, such as "To Do," "In Progress," and "Done." Work items, represented as cards or sticky notes, are moved across these columns as they progress through the workflow, providing a clear visual representation of work in progress and helping teams manage and prioritize their tasks efficiently. Kanban boards are especially useful for visualizing work, identifying bottlenecks, and maintaining a steady workflow.</p>
      <p >I hope you will enjoy using it and happy tasking!</p>
    </Wrapper>
  )
}

export default About

const Wrapper = styled.div`
  text-align: center;
  font-size:3rem;
  margin : 2rem;

`