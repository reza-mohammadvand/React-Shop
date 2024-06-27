import React from 'react'

import "./NavItem.css"
import NavItems from "./NavItems"


const NavItem = () => {
    return (
        <nav className='main-nav'>
            <ul className="NavItem d-none d-md-flex">
<NavItems Link={"/"}>صفحه اصلی</NavItems>
<NavItems Link={"/shop"}>
    <ul className="child">
<NavItems Link={"/CategoryProducts/mobile"}>موبایل  </NavItems>
<NavItems Link={"/CategoryProducts/accessory"}>
<ul className="child">
<NavItems Link={"/CategoryProducts/mobile"}>موبایل </NavItems>
<NavItems Link={"/CategoryProducts/loptop"}>لپ تاپ</NavItems>
<NavItems Link={"/CategoryProducts/mobile"}>موبایل </NavItems>
<NavItems Link={"/CategoryProducts/loptop"}>لپ تاپ</NavItems>
    </ul>
    لوازم جانبی</NavItems>
<NavItems Link={"/CategoryProducts/loptop"}>لپ تاپ</NavItems>
<NavItems Link={"/CategoryProducts/usb-drive"}>فلش مموری</NavItems>
<NavItems Link={"/CategoryProducts/air-pad"}>ایرپاد</NavItems>
<NavItems Link={"/CategoryProducts/hard-disk"}>هارد دیسک</NavItems>
<NavItems Link={"/CategoryProducts/monitor"}>مانیتور</NavItems>
    </ul>
    فروشگاه</NavItems>
<NavItems Link={"/cart"}>سبد خرید</NavItems>
<NavItems Link={"/blog"}>وبلاگ</NavItems>
<NavItems Link={"/contact-us"}>تماس با ما</NavItems>
<NavItems Link={"/about-us"}>درباره ما</NavItems>

            </ul>
        </nav>
    )
}

export default NavItem
