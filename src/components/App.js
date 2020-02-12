import React, { Component } from 'react'
import Wrapper from './Wrapper'
import Note from './Note'
import List from './List'
import Nav from './Nav'

//
class App extends Component {
    constructor() {
        super()
        this.state = {
            active: { id: 0, title: '', body: '' },
            notes: [],
            editing: false,
            showList: false,
        }
    }

    handleTitleChange = e => {
        let active = this.state.active
        active.title = e.target.value
        this.setState({ active: active, editing: true })
    }

    handleBodyChange = e => {
        let active = this.state.active
        active.body = e.target.value
        this.setState({ active: active, editing: true })
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
            let newActive = { id: lastNote, title: '', body: '' }
            this.setState({ active: newActive })
        }
    }

    toggleList = e => {
        this.setState({ showList: !this.state.showList })
    }

    handleSelected = e => {
        let notes = [...this.state.notes]
        let newActive = notes.filter(note => note.id === Number(e.target.id))[0]
        this.setState({ active: newActive })
    }

    render() {
        return (
            <Wrapper list={this.state.showList}>
                <List
                    show={this.state.showList}
                    notes={this.state.notes}
                    onSelected={this.handleSelected}
                    onToggle={this.toggleList}
                ></List>
                <Note
                    id={this.state.active.id}
                    title={this.state.active.title}
                    body={this.state.active.body}
                    onTitleChange={this.handleTitleChange}
                    onBodyChange={this.handleBodyChange}
                />
                <Nav
                    onToggleList={this.toggleList}
                    active={this.state.active}
                    onNewNote={this.handleNew}
                />
            </Wrapper>
        )
    }
}

export default App
