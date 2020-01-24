import React, { Component } from 'react'
import Wrapper from './Wrapper'
//
class App extends Component {
    constructor() {
        super()

        this.state = {
            editing: false.
            notes: [],
        }
    }

    render() {
        return (
            <Wrapper>
                <Header />
                { this.state.editing ? <NoteList /> : <NotePad /> }
            </Wrapper>
        )
    }
}

export default App
