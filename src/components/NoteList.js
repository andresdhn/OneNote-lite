import React from 'react'
import Fade from 'react-reveal/Fade'
//
export default props => {
    const handleSelected = e => {
        e.stopPropagation()
        props.onNoteSelected(e.target.id)
    }

    const handleDelete = e => {
        e.stopPropagation()
        if (window.confirm('Are you sure you wish to delete this note?')) {
            props.onNoteRemove(e.target.closest('.list__item').id)
        }
    }

    return (
        <Fade top distance={'.8em'} duration={500} cascade>
            <div id="notelist">
                {props.list.map(note => (
                    <article
                        key={note.id}
                        id={note.id}
                        className="list__item"
                        onClick={handleSelected}
                    >
                        {note.title}
                        <span onClick={handleDelete}></span>
                    </article>
                ))}
            </div>
        </Fade>
    )
}
