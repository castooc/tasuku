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
          <Routes bg = {true} col = {true} to="/about">
            <Icon.Info size={30}/> 
            <Text>ABOUT</Text>
          </Routes>
        {isAuthenticated && (
          <>
          <Routes bg = {true} col = {true} to="/profile">
            <Icon.User size={30}/>
            <Text>PROFILE</Text>
          </Routes>
        
          <Routes bg = {true} col = {true} to="/projects">
            <Icon.Columns size={30}/>
            <Text>PROJECTS</Text>
          </Routes>
          </>
        )}
    </ContainerIcons>
   
    <ContainerText>
        <Routes bg = {false} col = {false} to="/"> <Title>TASUKU</Title> </Routes>
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
  align-items:center;
  padding-top:2rem;
`
const ContainerIcons = styled.div`
  display:flex;
  justify-content:flex-start;
  align-items:center;
  min-height:27px;
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
  min-height:27px;
  min-width:28rem
`
const Routes = styled(NavLink)`
  display:flex;
  align-items:center;
	font-family: 'Open Sans', sans-serif;
  padding-left:0.7rem;
  color : black;
  padding:11px;
  border-radius: 2rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  &:hover,
  &:focus {
  transform: translateY(-8px);
  background-color:${(props)=>props.bg?"black":"white"};
  color:${(props)=>props.col?"white":"black"};
  &:active {
    background-color:${(props)=>props.bg?"black":"white"};
    color:${(props)=>props.col?"white":"black"};
  }
`
const Title = styled.div`
  font-family: 'Zeyada', cursive;
  padding-right:15px;
  font-size:5rem;
`
const Text = styled.div`
  font-size:1.1rem;
  padding-left:0.3rem;
`
const HorizontalLine = styled.hr`
  width:70%;
  color:black;
`
export default MainNav;