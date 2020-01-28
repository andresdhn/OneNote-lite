import React from 'react'
import Fade from 'react-reveal/Fade'
//
export default props => {
    const handleClick = e => {
        props.onNoteSelected(e.target.id)
    }

    return (
        <Fade top distance={'.8em'} duration={500} cascade>
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
        </Fade>
    )
}
