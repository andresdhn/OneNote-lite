import React, { Component } from 'react'
//
class NoteList extends Component {
    handleClick = e => {
        this.props.onNoteSelected(e.target.id)
    }

    render() {
        return (
            <div id="notelist">
                {this.props.list.map(note => (
                    <article
                        key={note.id}
                        id={note.id}
                        className="note"
                        onClick={e => this.handleClick(e)}
                    >
                        {note.title}
                    </article>
                ))}
            </div>
        )
    }
}
export default NoteList
