import React from 'react'
import Button from './Button'
//
const List = props => {
    return (
        <div id="list">
            <div className="list__header">
                <h2>Your notes</h2>
                <Button title="close" onClick={props.onToggle}>
                    &#8592;
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
                            <Button
                                title="delete"
                                onClick={e => props.onDelete(e, note.id)}
                            >
                                &#10008;
                            </Button>
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
