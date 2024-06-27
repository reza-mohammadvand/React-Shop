import React from 'react'
import { Link } from 'react-router-dom'

import logo from "./logo-02.png"

const Logo = () => {
    return (
        <Link to="/" className="order-1 order-md-0" >
        <div className="logo">
            <img src={logo} alt="Logo" />
        </div>
        </Link>
    )
}

export default Logo
