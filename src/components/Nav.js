import React from 'react'
import Button from './Button'
//
const Nav = props => {
    return (
        <div id="nav">
            <Button title="List" onClick={props.onToggleList}>
                =
            </Button>
            <Button title="Add new" onClick={props.onNewNote}>
                +
            </Button>
            <Button title="Add new" onClick={props.onSave}>
                &#10004;
            </Button>
        </div>
    )
}
export default Nav
