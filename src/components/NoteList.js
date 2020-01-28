import React from 'react'
//
export default props => {
    const handleClick = e => {
        props.onNoteSelected(e.target.id)
    }

    return (
        <div id="notelist">
            {props.list.map(note => (
                <article
                    key={note.id}
                    id={note.id}
                    className="note"
                    onClick={handleClick}
                >
                    {note.title}
                </article>
            ))}
        </div>
    )
}
