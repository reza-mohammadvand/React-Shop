import React from 'react'

import "./Header.css"
import NavItem from "./Navbar/NavItem"
import Logo from './Logo/Logo'
import Login from './Login/Login'
import HeaderMobile from './Header-md/HeaderMobile'
import BasketIcon from './BasketIcon/BasketIcon'
import Search from './Search/Search'


const Header = (props) => {


    return (
        <div className={`header ${props.isActive} ${props.isActive100}`} >
            <Logo />
            <NavItem />
            <HeaderMobile />
            <BasketIcon />            
            <Search />
            <Login Click={props.Click} />            
        </div>
    )
}

export default Header
