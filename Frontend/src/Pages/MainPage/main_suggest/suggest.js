import React from 'react'
import {Link} from "react-router-dom"


import "./suggest.css"

const Suggest = () => {
    return (
        <div className="suggest">
    <div className="suggest-cap">
<p >مجموعه ای از جدیدترین </p>
<p className="cap-big">تکنولوژی های روز دنیا</p>
<Link className="suggest-cap-link" to="/shop">مشاهده محصولات</Link>
    </div>  
        </div>
    )
}

export default Suggest
