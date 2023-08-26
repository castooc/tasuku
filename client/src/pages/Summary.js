import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Summary = () => {
  const { user } = useAuth0();
  if (!user) {
    return null;
  }
  console.log(user)

  return (
    <>
      <div>Summary</div>
      <img src={user.picture} alt={user.nickname} />
      <div>{user.nickname}</div>
    </>
  )
}

export default Summary