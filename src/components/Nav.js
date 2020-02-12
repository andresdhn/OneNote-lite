import React from 'react'
import Button from './Button'
//
const Nav = props => {
    return (
        <div id="nav">
            <Button color="blank" title="List" onClick={props.onToggleList}>
                =
            </Button>
            <Button color="blank" title="Add new" onClick={props.onNewNote}>
                +
            </Button>
        </div>
    )
}
export default Nav
