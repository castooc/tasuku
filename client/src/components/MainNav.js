import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { NavBarButtons } from '../features/authentification';
import { useAuth0 } from '@auth0/auth0-react';

const MainNav = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Wrapper>
        <ContainerMain>
            <Routes to="/">HOME</Routes>
            <Routes to="/about">About</Routes>
        </ContainerMain>
        {isAuthenticated && (
          <ContainerLoginUser>
              <Routes to="/profile">Profile</Routes>
              <Routes to="/calendar">Calendar</Routes>
              <Routes to="/tripform">Create Trip</Routes>
          </ContainerLoginUser>
        )}
        <NavBarButtons isAuthenticated = {isAuthenticated}/>
    </Wrapper>
  )
}
const Wrapper = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
`
const ContainerMain = styled.div`
    
`
const ContainerLoginUser = styled.div`
    
`
const Routes = styled(NavLink)`
  margin : 1rem 1rem;
`

export default MainNav;