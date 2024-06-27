import React from 'react'
import { Link } from 'react-router-dom'


import "./Path.css"

const Path = (props) => {
  return [
          <Link to={props.link}>{props.address}</Link>,<i className="fas fa-angle-left"></i>
 ]
}

export default Path