import React from 'react'
import { Link } from 'react-router-dom'

import "./BlogItem.css"

const BlogItem = (props) => {
    return (
        <div className="blog-item">
        <div className="img">
          <Link to={`/blogDetail/${props._id}`}><img src={props.img} className="img-fluid" alt="blog" /></Link>
        </div>
        <div className="caption">
    <p>نوشته شده توسط <span>{props.author}</span> در <span> {props.date}{props.data_day}</span></p>
    <Link to={`/blogDetail/${props._id}`}>{props.title}</Link>
    <p>{props.minText}</p>
        </div>
      </div>
    )
}

export default BlogItem
