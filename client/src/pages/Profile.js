import { styled } from "styled-components"
// import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react"
import Lottie from "lottie-react"
import animationData from "../assets/underConstruction.json"


const Profile = () => {
  const { user } = useAuth0();
  // const [isOpen, setIsOpen] = useState(true)

  if (!user) {
    return null;
  }

  // const handleClick = ()=>{
  //   setIsOpen(true)
  // }
  return (
    <Wrapper>
      {/* <Container>
        <Text>HERE IS THE PROFILE</Text>
        <img src={user.picture} alt={user.nickname} />
        <div>{user.nickname}</div>
        <EditProfile onClick={handleClick}> Edit Profile </EditProfile>
      </Container> */}
      <Lottie style={{ height: 600, width:750}} animationData={animationData}/>
      <Text>UNDER CONSTRUCTION</Text>
    </Wrapper>
  )
}
export default Profile

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;

`
const Text = styled.div`
  font-size:2rem;
`
// const Container = styled.div`
// `
// const EditProfile = styled.button`
// `