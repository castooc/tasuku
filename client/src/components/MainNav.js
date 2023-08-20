import React from 'react'
import { Link } from 'react-router-dom';
import { NavBarButtons } from '../features/authentification';

const MainNav = () => {
  return (
    <>
        <Link>
           HOME
        </Link>
        <NavBarButtons>
            LOGIN
        </NavBarButtons>
    </>

    
  )
}

export default MainNav;