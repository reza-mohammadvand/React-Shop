import React from 'react'

const FeatureSupportItem = (props) => {
    return (
        <div className="info-item ">
        <img src={props.src} />
        <div className="cap">
          <p className="text-muted">{props.title}</p>
        </div>
      </div>
    )
}

export default FeatureSupportItem
