import React, { Component } from 'react'
import Wrapper from './Wrapper'
import Note from './Note'
//
class App extends Component {
    constructor() {
        super()

        this.state = {
            notes: [],
        }
    }

    handleNoteSaved = note => {
        let newNotes = [
            ...this.state.notes,
            {
                id: this.state.notes.length + 1,
                title: note.title,
                body: note.body,
            },
        ]
        this.setState({ notes: newNotes, editing: true })
    }

    render() {
        return (
            <Wrapper>
                <Note onNoteSaved={this.handleNoteSaved} />
            </Wrapper>
        )
    }
}

export default App
