import React from 'react'
//
export default props => (
    <div className={`btn btn--${props.color}`} onClick={props.onClicked}>
        {props.children}
    </div>
)
