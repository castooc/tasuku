import { styled } from "styled-components"

export const Button = styled.button`
  all : unset;
  display:flex;
  align-items:center;
  margin-left:0.7rem;
  padding:7px;
  border-radius: 2rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  &:hover,
  &:focus {
  transform: translateY(-8px);
  background-color:black;
  color:white;
  }
  &:active {
    background-color:black;
    color:white;
  }
`
export const Text = styled.div`
    font-size:0.8rem;
    margin : 0 0.4rem;
`