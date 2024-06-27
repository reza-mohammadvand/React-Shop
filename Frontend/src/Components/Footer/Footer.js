import React from 'react'

import "./Footer.css"
import FooterLinks from './FooterLinks'
import NavItems from '../header/Navbar/NavItems'
import FooterLogo from './FooterLogo/FooterLogo'
import News from './news'

const Footer = () => {
    return (
        <div className="footer">
             <FooterLogo />
            <FooterLinks title={"لینک های سریع"}>
            <NavItems Link={"/"}>صفحه اصلی</NavItems>
            <NavItems Link={"/shop"}>فروشگاه</NavItems>
            <NavItems Link={"/cart"}>سبد خرید</NavItems>
            <NavItems Link={"/contact-us"}>تماس با ما</NavItems>

            </FooterLinks>
            <FooterLinks>
            <NavItems Link={"/about-us"}>درباره ما</NavItems>
            <NavItems Link={"/blog"}>وبلاگ</NavItems>
            <NavItems Link={"/"}>پیگیری سفارش</NavItems>
            </FooterLinks>
           <News />
            <div className="copyRight">
  <hr style={{backgroundColor:"rgb(241, 241, 241)", width: "90%"}} />
  <p>کلیه حقوق این سایت متعلق به <a href="/">شرکت لورم</a> میباشد.</p>
</div>
        </div>
    )
}

export default Footer
