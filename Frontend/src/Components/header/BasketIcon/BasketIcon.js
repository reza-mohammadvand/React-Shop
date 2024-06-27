import React from 'react'
import { Link } from 'react-router-dom'
import Drawer from 'react-modern-drawer'

import 'react-modern-drawer/dist/index.css'
import "./BasketIcon.css"
import img from "./product-04.jpg"

const BasketIcon = () => {

    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }



    return (
<div className="basket-icon order-1 order-md-0" id="basket-card">
<Drawer open={isOpen} onClose={toggleDrawer} direction='left'>
<div className='show-card'>
<div className='title'><p>سبد خرید</p></div>


<div className="product">
    <div className="item">
      <div className="img">
        <div className="deleted">
          <i className="fas fa-times"></i>
        </div>
      <Link to="/"><img src={img} className="img-fluid" alt=""/></Link>
    </div>
      <div className="cap">
        <Link to="/">پیراهن چارخونه <span className="count"><i className="fas fa-times"></i>1</span></Link>
        <p><span className="price">180000</span></p>
      </div>
    </div>
  </div>


  
<div className="btns mt-auto">
      <p className="final-price">مبلغ نهایی : <span>180000</span></p>
      <Link to="/Check-Out">نهایی کردن خرید</Link>
    </div>
    </div>
            </Drawer>
        <Link to="/" onClick={toggleDrawer} className="basket-btn"><i className="fas fa-shopping-cart"></i>
        </Link>
     </div>    )
}

export default BasketIcon
