import React from 'react'
import {Link} from "react-router-dom"

import "./NavItems.css"


const NavItems = (props) => {
    return (
        <li className="NavItems">
            <Link className="NavItems-Link" to={props.Link}>{props.children}</Link>
        </li>
    )
}

export default NavItems
