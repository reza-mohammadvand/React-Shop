import React from 'react'
import { Link } from 'react-router-dom'


const CartItem = (props) => {
    return (
        <tr>
        <th>
          <div className="item">
              <div className="img">                  
              <i className="fa fa-trash"></i>
                <div onClick={props.delete} className="deleted">
                </div>
              <a ><img src={props.image} className="img-fluid" alt={props.name} /></a>
            </div>
            <div className="cap col-8">
              <Link to={`/product/${props.id}`}><p className="mb-0">{props.name}</p></Link>
            </div>
          </div>
        </th>
        <th>
          <p className={`table-price${props.isPriceDiscount}`}>{props.price}</p>
          <p className={`table-price${props.isPriceDiscount}`}>{props.priceDiscount}</p>
        </th>
        <th>
          <p className="table-price">{props.count}</p>
        </th>
        <th>
          <p className="table-price final-price">{props.allPrice}</p>
        </th>
      </tr>
    )
}

export default CartItem
