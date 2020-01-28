import React, { Component } from 'react'
import Wrapper from './Wrapper'
import CreateForm from './CreateForm'
import NoteList from './NoteList'
import Note from './Note'
//
class App extends Component {
    constructor() {
        super()

        this.state = {
            editing: false,
            selectedId: 0,
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
        this.setState({ editing: true, selectedId: Number(id) })
    }

    handleNoteChanged = body => {
        let notes = [...this.state.notes]
        let noteIndex = notes.findIndex(
            notes => notes.id === this.state.selectedId
        )
        notes[noteIndex].body = body

        this.setState({ editing: false, selectedId: 0, notes: notes })
    }

    render() {
        return (
            <Wrapper>
                <section id="header">
                    <div className="container">
                        <CreateForm onNewNote={this.handleNewNote} />
                    </div>
                </section>
                <section id="content">
                    <div className="container">
                        {this.state.editing ? (
                            <Note
                                id={this.state.selectedId}
                                title={this.state.selectedTitle}
                                body={this.state.selectedBody}
                                onNoteChanged={this.handleNoteChanged}
                            />
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
