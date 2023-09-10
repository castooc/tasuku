import { styled } from "styled-components"

export const Column = ({type}) => {
  return (
    <Wrapper>
        <ContainerTitle>

        </ContainerTitle>
        {type}
    </Wrapper>
  )
}

const Wrapper = styled.div`
    border: black solid;
    width : 20rem;
    text-align:center;
    
`
const ContainerTitle = styled.div`
    border: black solid;
    width : 20rem;
    text-align:center;
`