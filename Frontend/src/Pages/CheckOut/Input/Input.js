import React from 'react'

const Input = (props) => {

    return (
        <div className="form-group">
        <label for={props.id}>{props.title} <span>{props.necessary ? "*" : ""}</span></label>
        <input type={props.type} id={props.id} className="form-control" required={props.necessary} placeholder={props.placeholder} />
      </div>
    )
}

export default Input
