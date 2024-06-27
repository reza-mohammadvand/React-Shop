import React from 'react'



import "./Factor.css"

const Factor = () => {


var totalPrice= 2800000
    var discount = 20000


    return (
        <div className="list order-1 order-lg-0 ">
        <p>فاکتور شما</p>
        <ol>
          <div><span>کالا</span><span> قیمت</span></div>
          <li><span >شلوار جین</span><span className="price-checkout"> 15000</span></li>
          <li><span>کرم ضدآفتاب</span><span className="price-checkout"> 54000</span></li>
          <li><span>پیراخن مردانه</span><span className="price-checkout"> 60000</span></li>
          <li><span>سوییشرت</span><span className="price-checkout"> 47500</span></li>
        </ol>
        <hr />
        <ol className="sum">
          <li><span> تخفیف</span><span className="discount-checkout">{discount}</span></li>
          <li><span>مبلغ کل</span><span className="final-checkout">{totalPrice-discount}</span></li>
        </ol>
        <hr />
      <p>در صورت خرید بالای 150000 تومان هزینه ارسال بصورت رایگان میباشد</p>
      <input type="submit" id="submit-shop" className="form-control" value="تکمیل فرآیند خرید" />
    
    
      </div>
    )
}

export default Factor
