import React from 'react'
import {Link} from "react-router-dom"


const SliderItem = (props) => {
    return (
        <div className="cap col-6">
           <p className="  animated fadeInUp">{props.title}</p>
           <p className="  animated bounceInLeft">{props.boldtitle}</p>
           <Link to="/shop" className="animated rotateIn shop-now" >خرید</Link>
        </div>
    )
}

export default SliderItem
