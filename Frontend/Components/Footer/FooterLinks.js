import React from 'react'

import "./FooterLinks.css"

const FooterLinks = (props) => {
    return (
        <div className="FotterLinks Footer-Links">
            <p>{props.title}</p>
        <ul >
            {props.children}
        </ul>
        </div>
    )
}

export default FooterLinks
