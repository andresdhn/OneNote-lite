import React from 'react'
//
const List = props => {
    return (
        <div id="list" className={props.show ? 'list--open' : ''}>
            {props.notes.map(note => (
                <div
                    key={note.id}
                    id={note.id}
                    className="list__item"
                    onClick={props.onSelected}
                >
                    {note.title}
                </div>
            ))}
        </div>
    )
}

export default List
