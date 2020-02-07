import React from 'react'
//
const Button = props => (
    <div className={`btn btn--${props.color}`} onClick={props.onClick}>
        {props.children}
    </div>
)

export default Button
