import React from 'react'
import Button from './Button'
//
const List = props => {
    return (
        <div id="list" className={props.show ? 'list--open' : ''}>
            <div className="list__header">
                <h2>Your notes</h2>
                <Button title="close" onClick={props.onToggle}>
                    x
                </Button>
            </div>
            <div className="list__container">
                {props.notes.length > 0 ? (
                    props.notes.map(note => (
                        <div
                            key={note.id}
                            id={note.id}
                            className="list__item"
                            onClick={props.onSelected}
                        >
                            {note.title}
                        </div>
                    ))
                ) : (
                    <label>0 Notes...</label>
                )}
            </div>
        </div>
    )
}

export default List
