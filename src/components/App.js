import React, { Component } from 'react'
import Wrapper from './Wrapper'
import Note from './Note'
import Button from './Button'
//
class App extends Component {
    constructor() {
        super()
        this.state = {
            active: { id: 0, title: '', body: '' },
            notes: [],
        }
    }

    handleTitleChange = e => {
        let active = this.state.active
        active.title = e.target.value
        this.setState({ active: active })
    }

    handleBodyChange = e => {
        let active = this.state.active
        active.body = e.target.value
        this.setState({ active: active })
    }

    handleSave = e => {
        let notes = [...this.state.notes]

        let note = notes.filter(note => note.id === this.state.active.id)
        if (note.length > 0) {
            notes = notes.map(val => {
                if (val.id === note.id) {
                    val.title = note.title
                    val.body = note.body
                }
                return val
            })
        } else {
            notes.push(this.state.active)
        }

        this.setState({ notes: notes })
    }

    render() {
        return (
            <Wrapper>
                <Note
                    id={this.state.active.id}
                    title={this.state.active.title}
                    body={this.state.active.body}
                    onTitleChange={this.handleTitleChange}
                    onBodyChange={this.handleBodyChange}
                />
                <footer>
                    <div className="container">
                        <Button color="gray" onClick={this.handleSave}>
                            Save me
                        </Button>
                    </div>
                </footer>
            </Wrapper>
        )
    }
}

export default App
