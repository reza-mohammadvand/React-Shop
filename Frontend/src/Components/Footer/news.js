import React from 'react'

import "./news.css"

const News = () => {
    return (
        <div className="footer-news">
            <p className="title">خبرنامه</p>
            <p >با عضویت در خبرنامه ما از جدیدترین اخبار باخبر شوید</p>
    <div className="input-group">
      <div className="input-group-prepend">
        <button className="btn text-white btn-outline-none"  type="button" id="button-addon1"> <i className="ml-1 fas fa-envelope"></i> ثبت نام</button>
      </div>
      <input type="email" className="form-control"  placeholder=" ايميل خود را وارد كنيد" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
            </div>
         <div className="social">
     <a href="/"><i className="fab fa-telegram-plane"></i></a>
      <a href="/"><i className="fab fa-instagram"></i></a>
      <a href="/"><i className="fab fa-facebook"></i></a>
      <a href="/"><i className="fab fa-twitter"></i></a>
  </div>
        </div>
    )
}

export default News
