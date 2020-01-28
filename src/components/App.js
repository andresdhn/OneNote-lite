import React, { Component } from 'react'
import Wrapper from './Wrapper'
import TopForm from './TopForm'
import NoteList from './NoteList'
import Note from './Note'
//
class App extends Component {
    constructor() {
        super()

        this.state = {
            editing: false,
            openNote: {},
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
        let openNote = this.state.notes.filter(note => note.id === parseInt(id))
        if (openNote) {
            this.setState({ editing: true, openNote: openNote[0] })
        }
    }

    handleNoteChanged = body => {
        let notes = [...this.state.notes]
        let noteIndex = notes.findIndex(
            notes => notes.id === this.state.openNote.id
        )
        notes[noteIndex].body = body

        this.setState({ editing: false, selectedId: 0, notes: notes })
    }

    handleNoteRemove = id => {
        // Filter Removed item + Sorts list higher to lower id
        let notes = [...this.state.notes]
            .filter(note => note.id !== parseInt(id))
            .sort((a, b) => a > b)

        // Reorder list and redo Ids
        let newNotes = notes.map((note, index) => {
            note.id = index + 1
            return note
        })

        this.setState({ notes: newNotes })
    }

    render() {
        return (
            <Wrapper>
                <section id="header">
                    <div className="container">
                        <TopForm
                            title={this.state.openNote.title}
                            editing={this.state.editing}
                            onNewNote={this.handleNewNote}
                        />
                    </div>
                </section>
                <section id="content">
                    <div className="container">
                        {this.state.editing ? (
                            <Note
                                body={this.state.openNote.body}
                                onNoteChanged={this.handleNoteChanged}
                            />
                        ) : (
                            <NoteList
                                list={this.state.notes}
                                onNoteRemove={this.handleNoteRemove}
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
