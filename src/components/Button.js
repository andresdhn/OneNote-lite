import React from 'react'
//
const Button = props => (
    <div className={`btn btn--${props.color}`} title={props.title} onClick={props.onClick}>
        {props.children}
    </div>
)

export default Button
