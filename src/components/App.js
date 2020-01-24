import React, { Component } from 'react'
import Wrapper from './Wrapper'
import Header from './Header'
import NoteList from './NoteList'
import NotePad from './NotePad'
//
class App extends Component {
    constructor() {
        super()

        this.state = {
            editing: false,
            selected: [],
            notes: [],
        }
    }

    handleNewNote = note => {
        let newNotes = [
            ...this.state.notes,
            { id: this.state.notes.length + 1, title: note, body: '' },
        ]
        this.setState({ notes: newNotes })
    }

    handleNoteSelected = id => {
        let selectedNote = this.state.selected.filter(note => note.id === id)
        if (selectedNote) {
            this.setState({ editing: true, selected: selectedNote })
        }
    }

    render() {
        return (
            <Wrapper>
                <Header onNoteSubmitted={this.handleNewNote} />
                <section id="notes">
                    <div className="container">
                        {this.state.editing ? (
                            <NotePad note={this.state.selected} />
                        ) : (
                            <NoteList
                                list={this.state.notes}
                                onNoteSelected={this.handleNoteSelected}
                            />
                        )}
                    </div>
                </section>
            </Wrapper>
        )
    }
}

export default App
