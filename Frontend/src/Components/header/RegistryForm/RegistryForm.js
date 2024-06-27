import React,{useState,useEffect} from 'react';

import "./RegistryForm.css"
import undraw_registry from "./undraw_registry.svg"

const RegistryForm = (props) => {


    const[Captcha,setCaptcha] = useState("");

    const captchaHandler = () => {
        var cap = "123456789qwertTyFuEiKoXpasAdfgKhjkTlzxQcvbPnmM";
        var c1 = Math.floor(Math.random() * 10);
        var c2 = Math.floor(Math.random() * 10 + 5);
        var c3 = Math.floor(Math.random() * 10 + 10);
        var c4 = Math.floor(Math.random() * 10);
        var c5 = Math.floor(Math.random() * 10 + 20);
        var u =
          cap.charAt(c1) +
          cap.charAt(c2) +
          cap.charAt(c3) +
          cap.charAt(c4) +
          cap.charAt(c5);
          setCaptcha(u)
              }

              useEffect(()=>{

                captchaHandler()
            },[])


    return (
        <form style={{
            transform : props.ShowRegister ? "translateY(0)" : "translateY(-100vh)",
            opacity  : props.ShowRegister ? "1" : "0"
        }} className={`login-form LoginFormShow registry-form`}>    
        <img src={undraw_registry} alt="Logo" />   
<div>
  <i className="fas fa-user"></i><input required type="text" id="username-account" placeholder="نام کاربری ..." />
</div>
<div>
  <i className="fas fa-key"></i><input required type="password" id="password-account" placeholder="رمز عبور  ..." />
</div>
<a className="forget-pass mb-2 "  >راهنمایی : رمز باید دست کم 8 رقم و شامل حروف بزرگ و کوچک انگلیسی و اعداد باشد.</a>
<div>
  <i className="fas fa-key"></i><input required type="password" id="password-account-repeat" placeholder="تکرار رمز عبور ..." />
</div>
<div>
  <i className="fas fa-envelope"></i><input type="email" id="Email" placeholder="ایمیل ..." />
</div>
<div className="captcha">
<div className="w-50" >
  <i className="fas fa-lock"></i><input required type="text" id="captcha" placeholder="کد امنیتی ..." />
</div>
<div id="show-cap" className="show-cap"><p id="show-captcha">{Captcha}</p> <i onClick={captchaHandler} className="fas fa-sync-alt"></i></div>
</div>
<a className=" registried" onClick={props.hideregister}> قبلا ثبت نام کرده اید ؟ (کلیک کنید)</a>
<a className="login-btn" href="/">ثبت نام</a>
   </form>
    )
}

export default RegistryForm
