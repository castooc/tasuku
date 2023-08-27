import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'


const Profile = () => {
  const { user } = useAuth0();
  if (!user) {
    return null;
  }

  return (
    <>
      <div>Profile</div>
      <img src={user.picture} alt={user.nickname} />
      <div>{user.nickname}</div>
    </>
  )
}

export default Profile