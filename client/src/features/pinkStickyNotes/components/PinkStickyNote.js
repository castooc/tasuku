import { styled } from 'styled-components'
import  stickyBg from "../assets/pinkSticky.png"


export const PinkStickyNote = ({quote}) => {
  return (
    <Wrapper>
      <Text>
        {quote}
      </Text>
    </Wrapper>
  )
}
const Wrapper = styled.div`
background-image: url(${stickyBg});
background-repeat: no-repeat;
background-size: 17.1rem 14rem;
max-width:13.1rem;
padding: 2.8rem 2.2rem 2.8rem 1.6rem;
text-align:center;
`
const Text = styled.div`
  font-size:1.1rem;
  font-weight:bold;
  transform: rotate(-5deg);
`;
