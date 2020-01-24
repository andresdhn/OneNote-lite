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
                    <div
                        key={note.id}
                        id={note.id}
                        class="note"
                        onClick={e => this.handleClick(e)}
                    >
                        {note.title}
                    </div>
                ))}
            </div>
        )
    }
}
export default NoteList
