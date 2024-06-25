import React from 'react'

import "./Login.css"

const Login = (props) => {
    return (
        <div className=" login order-1 order-md-0">
            <a href={props.Click} >
            <i className="fa fa-user"></i>
            <p>وارد شوید</p>
            </a>
        </div>
    )
}

export default Login
