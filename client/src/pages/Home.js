import { useAuth0 } from '@auth0/auth0-react'
import { verifyExistingUser } from '../features/authentification'


const Home = () => {
  const { user, isAuthenticated } = useAuth0();
  //Verifies and creates new user if necessary
  verifyExistingUser(user, isAuthenticated);

  return (

    <div>Home</div>
  )
}

export default Home