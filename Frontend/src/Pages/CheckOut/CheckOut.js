import React,{useEffect} from 'react'
import Input from './Input/Input'
import Factor from '../../Components/Factor/Factor'

import "./CheckOut.css"
import Path from '../../Components/Path/Path'

const CheckOut = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


    return (
      
<div className="checkout-item">
<div className='path'>
    <Path address={"صفحه اصلی"} link={"/"} />
    <Path address={"فاکتور خرید"} link={"/Check-Out"} />
  </div>
  <Factor />
  <div className="bill-details order-0 order-lg-1 pr-5">
    <p>جزئیات فاکتور</p>
  <form action="#">
          <Input title={"نام"} necessary={true} type={"text"} id={"name"} placeholder={"نام خود را وارد کنید "} />
          <Input title={"نام خانوادگی"} necessary={true} type={"text"} id={"family"} placeholder={"نام خانوادگی خود را وارد کنید " } />
          <Input title={"استان"} necessary={true} type={"text"} id={"state"} placeholder={"استان محل اقامت را وارد کنید "} />
          <Input title={"شهر"} necessary={true} type={"text"} id={"city"} placeholder={"شهر محل اقامت را وارد کنید " } />
          <textarea rows="5" placeholder="آدرس ..."></textarea>
          <Input title={"پلاک"} necessary={true} type={"text"} id={"block"} placeholder={"  پلاک را وارد کنید "} />
          <Input title={"کد پستی"} necessary={true} type={"text"} id={"post-code"} placeholder={"کد پستی را وارد کنید " } />
          <Input title={"تلفن ثابت"} necessary={false} type={"text"} id={"phone"} placeholder={"تلفن ثابت را وارد کنید "} />
          <Input title={"موبایل"} necessary={true} type={"text"} id={"cell-phone"} placeholder={"موبایل  را وارد کنید "} />
          <Input title={"ایمیل"} necessary={false} type={"email"} id={"email"} placeholder={"ایمیل  را وارد کنید "} />
          <input type="submit" id="save_address" className="form-control" value="ذخیره آدرس" />
  </form>
  </div>
</div>
    )
}

export default CheckOut
