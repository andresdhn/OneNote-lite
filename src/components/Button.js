import React from 'react'
//
export default props => (
    <div className={`btn btn--${props.color}`} onClick={props.onClick}>
        {props.children}
    </div>
)
