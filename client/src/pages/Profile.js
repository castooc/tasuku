import { styled } from "styled-components"
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react"
import ProfileModal from "../features/profileModal/components/ProfileModal";



const Profile = () => {
  const { user } = useAuth0();
  const [isOpen, setIsOpen] = useState(true)

  if (!user) {
    return null;
  }

  const handleClick = ()=>{
    setIsOpen(true)
  }
  return (
    <Wrapper>
      <EditProfile onClick={handleClick}> Edit Profile </EditProfile>
      <ProfileModal isOpen = {isOpen} setIsOpen = {setIsOpen}/>
      <img src={user.picture} alt={user.nickname} />
      <div>{user.nickname}</div>
    </Wrapper>
  )
}
export default Profile

const Wrapper = styled.div`

`
const EditProfile = styled.button`

`