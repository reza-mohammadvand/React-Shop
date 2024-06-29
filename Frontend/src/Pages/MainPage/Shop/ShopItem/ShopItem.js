import React from 'react'
import {Link} from "react-router-dom"

import "./ShopItem.css"

const ShopItem = ({product}) => {

  var isdiscount="no"

  if (product.discount!=0) {
isdiscount="yes"
  }


    return (
        <div className="product-item animated fadeInUp">
        <div className="img">
          <img src={product.image} className="img-fluid" alt="" />
        </div>
<div className="add-to-cart">
<Link to={`/product/${product._id}`}> افزودن به سبد خرید <i className="fas fa-shopping-cart"></i></Link>
</div>
<div className="cap">
<div><p className="mb-2"><Link to={`/product/${product._id}`}>{product.name}</Link></p><p className={`discount mb-2 discount-${isdiscount}`}>{`${product.discount}%`}</p></div>
<div>
<p className={`price-${isdiscount}-discount`}>{product.price}</p>
<p className={`price-${isdiscount}-discount`}>{Math.ceil(((product.price/100)*(100-product.discount))/1000)*1000}</p>
</div>
</div>
      </div>
    )
}

export default ShopItem
