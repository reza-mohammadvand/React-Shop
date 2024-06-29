import React from 'react'
import { Link } from 'react-router-dom'

import "./CategoryItem.css"

const CategoryItem = (props) => {
    return (
        <Link to={props.Link} >
        <div className="category-item">
        <img src={props.img} className="img-fluid" alt="category" />  
        <div className="cap">
              <p>{props.title}</p>
              <p>{props.description}</p>
        </div>
    <div className="btn-item">
      <p>محصولات</p>
    </div>
    </div>
    </Link>
    )
}

export default CategoryItem
