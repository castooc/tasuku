import { styled } from 'styled-components'

export const StickyNotes = ({quote}) => {
  return (
    <StickyNoteContainer>
      <StickyNoteHeader>
      </StickyNoteHeader>
      <StickyNoteContent>
          <LinedPaper>
            <Text>{quote}</Text>
          </LinedPaper>
      </StickyNoteContent>
    </StickyNoteContainer>
  )
}

const StickyNoteContainer = styled.div`
  border: red solid;
  max-width:20rem;
  border: 2px solid #FFFF99;
  background-color: #FFFF99;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  font-family: 'IBM Plex Mono', monospace;
  margin-bottom: 20px;
`
const StickyNoteHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FFFF99;
  color: #FFFF99;
  padding: 10px;
`;
const StickyNoteContent = styled.div`
  background-color: #FFFF99;
  border-radius: 0 0 10px 10px;
  position: relative;
`;
const LinedPaper = styled.div`
  background-image: linear-gradient(0deg, transparent 24px, rgba(0, 0, 0, 0.1) 25px, transparent 26px),
  linear-gradient(0deg, transparent 49px, rgba(0, 0, 0, 0.1) 50px, transparent 51px);
  background-size: 100% 2rem;;
  background-color: #FFFF99;
  padding: 10px;
  margin-bottom: 10px;
  text-align:center;
`;
const Text = styled.div`
  font-size:1.1rem;
  font-weight:bold;
`;
