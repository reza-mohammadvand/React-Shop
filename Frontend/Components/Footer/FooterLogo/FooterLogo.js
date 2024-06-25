import React from 'react'

import "./FooterLogo.css"
import FooterLogoImage from '../../header/Logo/logo-02.png'

const FooterLogo = () => {
    return (
        <div className="footerLogo">
            <div className="footerLogoimg">
<a href="/"><img src={FooterLogoImage} alt="FooterLogo" /></a>
            </div>
            <p className="description">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
           
        </div>
    )
}

export default FooterLogo
