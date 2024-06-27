import React from 'react'
import {Link} from "react-router-dom"

import "./BlogItem.css"

const BlogItem = (props) => {
    return (
        <div className="Blog-Item">
  <div className="img">
    <a href="#"><img src={props.img} className="img-fluid" alt="" /></a>
    <div className="date">
      <p>{props.data_day}</p>
      <p>{props.data}</p>
    </div>
  </div>
  <Link to={`/blogDetail/${props._id}`} className="title">{props.title}</Link>  
  <p>{props.short_text}</p>
  <div className="main-footer">
    <p><span> نوشته شده توسط</span> {props.author}</p>    
    <Link to={`/blogDetail/${props._id}`}>ادامه مطلب <i className="fas fa-long-arrow-alt-left"></i></Link>
  </div>
</div>
    )
}

export default BlogItem
