import React,{useEffect} from 'react'
import axios from 'axios'

import "./Contact-us.css"
import Path from '../../Components/Path/Path'

const Contact_us = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


    var datasendContactUS = {
        comment:"",
        Email:"",
        }
        var postDataHandler = () => {
 
            axios.post('https://jsonplaceholder.typicode.com/posts', datasendContactUS)
              .then((response) => {
                console.log(response.status)
              })
          }


    return (
        <div className="contact">
  <div className="pages-header ">
      <div></div>
    <p>ارتباط ما</p>
  </div>
  <div className='path'>
    <Path address={"صفحه اصلی"} link={"/"} />
    <Path address={"ترتباط با ما"} link={"/about-us"} />
  </div>
  <div className="contact-item container-lg">
<div className="item-form">
  <p className="mt-5">نظرات و دیدگاه های خود را برای ما ارسال کنید</p>
  <form action="#">
  <div>
  <i className="fas fa-envelope"></i>      <input onChange={(event) =>  datasendContactUS.Email = event.target.value } type="email" required="" placeholder="ایمیل*" />
</div>
<textarea onChange={(event) =>  datasendContactUS.comment = event.target.value } rows="10" placeholder="نظر خود را برای ما ارسال کنید ..."></textarea>
<input onClick={postDataHandler}  type="submit" value=" ارسال" />

</form>
</div>
<div className="item-details">
    <p> راه های تماس با ما</p>
<p className="bold"><i className="fas fa-map-marker"></i>آدرس : </p>
<p>ایران-خوزستان-دزفول-شهرداری منطقه 1 -موسسه تابان</p>
<p className="bold"><i className="fas fa-phone"></i>شماره تماس : </p>
<p>061-4563215 | 061-42268751</p>
<p className="bold"><i className="fas fa-headphones"></i>واحد پشتیبانی : </p>
<p>Support.photography@gmail.com</p>
</div>
  </div>
</div>
    )
}

export default Contact_us
