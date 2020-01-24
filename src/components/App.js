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

    render() {
        return (
            <Wrapper>
                <Header onNoteSubmitted={this.handleNewNote} />
                <section id="notes">
                    <div className="container">
                        {this.state.editing ? (
                            <NotePad />
                        ) : (
                            <NoteList list={this.state.notes} />
                        )}
                    </div>
                </section>
            </Wrapper>
        )
    }
}

export default App
