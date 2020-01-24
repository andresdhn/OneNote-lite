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

    render() {
        return (
            <Wrapper>
                <Header />
                {this.state.editing ? <NoteList /> : <NotePad />}
            </Wrapper>
        )
    }
}

export default App
