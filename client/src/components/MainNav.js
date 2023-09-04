import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { NavBarButtons } from '../features/authentification';
import { useAuth0 } from '@auth0/auth0-react';
import * as Icon from 'react-feather';


const MainNav = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <>
    <Wrapper>
      <ContainerIcons>
          <Routes to="/about">
            <Icon.Info size={24}/> 
            <Text>ABOUT</Text>
          </Routes>
        {isAuthenticated && (
          <>
          <Routes to="/profile">
            <Icon.User size={24}/>
            <Text>PROFILE</Text>
          </Routes>
        
          <Routes to="/projects">
            <Icon.Columns size={24}/>
            <Text>PROJECTS</Text>
          </Routes>
          </>
        )}
    </ContainerIcons>
   
    <ContainerText>
        <Routes to="/"> <Title>TASUKU</Title> </Routes>
    </ContainerText>
   
    <ContainerButtons>
        <NavBarButtons isAuthenticated = {isAuthenticated}/>
    </ContainerButtons>
    </Wrapper>
    <HorizontalLine  />
    </>
    
  )
}
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding:1.2rem;
`
const ContainerIcons = styled.div`
  display:flex;
  justify-content:flex-start;
  align-items:center;
  min-width:28rem;
`
const ContainerText = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`
const ContainerButtons = styled.div`
  display:flex;
  justify-content:flex-end;
  align-items:center;
  min-width:28rem
`
const Routes = styled(NavLink)`
  display:flex;
  align-items:center;
  padding:0.4rem;
  color : white;
`
const Title = styled.div`
  font-size:3rem;
`
const Text = styled.div`
  font-size:0.9rem;
  padding-left:0.5rem;
`
const HorizontalLine = styled.hr`
  width:65%;
  color:white;
`
export default MainNav;