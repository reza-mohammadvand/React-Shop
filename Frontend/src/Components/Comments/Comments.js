import React from 'react'

import "./Comments.css"
import profile_picture from "./profile-picture.png"

const Comments = (props) => {

 let profile = ""

 if(props.img===""){
    profile = profile_picture
 }
 else{
    profile = props.img
 }


  return (
    <div className="comment-text">
  <div className="img">
    <img src={profile} alt="" />
  </div>
  <div className="cap">
<p>{props.name}</p>
<p>{props.text}</p>
<div className="cap-details">
  <i className="far fa-clock"></i>{props.date}
</div>
  </div>
</div>
  )
}

export default Comments