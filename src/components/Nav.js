import React from 'react'
import Button from './Button'
//
const Nav = props => {
    return (
        <div id="nav">
            <Button color="blank" onClick={props.onToggleList}>
                <label title="List">=</label>
            </Button>
            <Button color="blank" onClick={props.onNewNote}>
                <label title="Add new">+</label>
            </Button>
        </div>
    )
}
export default Nav
