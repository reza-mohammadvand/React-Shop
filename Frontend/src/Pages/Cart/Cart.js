import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {Link} from "react-router-dom"


import "./Cart.css"
import {addToCart, removeFromCart} from "../../Action/CartAction"
import CartItem from './CartItem/CartItem'
import Path from '../../Components/Path/Path'

const Cart = ({ match }) => {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    const productId = match.params.id
  
    const dispatch = useDispatch()
  
    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart
  

    useEffect(() => {
      if (productId) {
        dispatch(addToCart(productId))
      }
    }, [dispatch, productId])
  

    const removeFromCartHandler = (id) => {
      dispatch(removeFromCart(id))
    }


    var count = 2
   

    var discount = 0
    
    cartItems.map((item)=>{
      discount += (Math.ceil(((item.price/100)*(item.discount))/1000)*1000)*count
    })


  var totalPrice = 0

  cartItems.map((item)=>{
    totalPrice += (item.price)*count
  })


    return (
        <div className="cart">
                <div className='path'>
    <Path address={"صفحه اصلی"} link={"/"} />
    <Path address={"سبد خرید"} link={"/cart"} />
  </div>
    <table className="table">
          <thead>
        <tr>
          <th>محصول</th>
          <th>قیمت</th>
          <th>تعداد</th>
          <th> قیمت کل</th>
        </tr>
      </thead>
      <tbody>
         {cartItems.map((item)=>{
                return(
                   <CartItem
                   name={item.name}
                   key={item.product}
                   id={item.product}
                   price={item.price}
                   isPriceDiscount={ (item.discount != 0) ? "-discount" : "" }
                   priceDiscount={Math.ceil(((item.price/100)*(100-item.discount))/1000)*1000}
                   delete={ () => removeFromCartHandler(item.product)}
                   image={item.image}
                   count={count}
                   allPrice={Math.ceil(((item.price/100)*(100-item.discount))/1000)*1000*count}
                   />
                )
            })}
     </tbody>
         </table>
    

         <div className="discount ">
           <p>کد تخفیف</p>
           <div>
             <input type="text" placeholder="کد تخفیف خود را وارد کنید" />
             <input type="button" value="تخفیف" />
           </div>
         </div>


         <div className="sum">
         <p>فاکتور خرید</p>
         <p><span>مبلغ</span><span className="showprice">{totalPrice}</span></p>
         <p><span>تخفیف</span><span className="showdis">{discount}</span></p>
         <p><span>مبلغ نهایی</span><span className="showpricefinal">{totalPrice-discount}</span></p>
         <Link to={"/Check-Out"}>ادامه فرآیند خرید</Link>
       </div>
          
         </div>
    )
}

export default Cart

