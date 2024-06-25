import React from 'react';

import RegistryForm from '../RegistryForm/RegistryForm'
import Wrapper from '../../../Hoc/Wrapper'
import undraw_Security from "./undraw_Security.svg"
import "./LoginForm.css"


const LoginForm = (props) => {




    return (
      <Wrapper>
            <form className={`login-form ${props.className}`}>    
            <img src={undraw_Security} alt="Logo" />   
  <div>
      <i className="fas fa-user"></i><input required type="text" id="username-login"placeholder="نام کاربری ..."  />
    </div>
    <div>
      <i className="fas fa-key"></i><input required type="password" id="password-login" placeholder="رمز عبور  ..." />
    </div>
    <a className="forget-pass" href="/">رمز عبور خود را فراموش کرده اید ؟</a>
    <a className="login-btn" href="/">ورود</a>
    <a className="login-btn"  onClick={props.ShowRegisterbutton}>ثبت نام</a>
       </form>
       <RegistryForm ShowRegister={props.ShowRegister} hideregister={props.hideregister} />

       </Wrapper>
    )
}

export default LoginForm
