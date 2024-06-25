import React from 'react'

import "./BackDrop.css"

const BackDrop = (props) => {
    return (
        <div className={`backdrop ${props.className}`} onClick={props.Click} >
            {props.children}
        </div>
    )
}

export default BackDrop
