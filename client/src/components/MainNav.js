import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { NavBarButtons } from '../features/authentification';
import { useAuth0 } from '@auth0/auth0-react';
import * as Icon from 'react-feather';


const MainNav = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Wrapper>
        <ContainerMain>
          <Routes to="/"> 
            <Icon.Home size={36}/> 
          </Routes>

          <Routes to="/about">
            <Icon.Info size={36}/> 
          </Routes>
        </ContainerMain>
        {isAuthenticated && (
          <ContainerLoginUser>
              <Routes to="/profile">
                <Icon.User size={36}/>
              </Routes>

              <Routes to="/calendar">
                <Icon.Calendar size={36}/>
              </Routes>

              <Routes to="/tripform">
                <Icon.FilePlus size={36}/>
              </Routes>
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
    margin:1.5rem;
`
const ContainerMain = styled.div`
    
`
const ContainerLoginUser = styled.div`
    
`
const Routes = styled(NavLink)`
  color : #AA96DA;
  font-family: 'Dosis', sans-serif;
  margin : 1rem 1rem;
`

export default MainNav;