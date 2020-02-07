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
            editing: false,
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

    handleSave = () => {
        if (this.state.active.title === '' && this.state.active.body === '') {
            return false
        }

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

        this.setState({ notes: notes, editing: true })
    }

    handleNew = e => {
        let lastNote = this.state.notes.length

        if (lastNote > 0) {
            let newActive = { id: lastNote + 1, title: '', body: '' }
            this.setState({ active: newActive, editing: false })
        }
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
                <section id="footer">
                    <div className="container">
                        <Button color="gray" onClick={this.handleSave}>
                            Save
                        </Button>
                        {/* TODO:  Move Add and Delete functionality to the list component (Makes sense) */}
                        {this.state.editing && (
                            <Button color="blank" onClick={this.handleDelete}>
                                <img
                                    src="./icon-delete.png"
                                    width="20"
                                    alt="delete note"
                                />
                            </Button>
                        )}
                        <Button color="blank" onClick={this.handleNew}>
                            <label title="Add new">+</label>
                        </Button>
                    </div>
                </section>
            </Wrapper>
        )
    }
}

export default App
