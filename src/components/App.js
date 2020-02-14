import React, { Component } from 'react'
import getFullDate from '../utils/getFullDate'
import Wrapper from './Wrapper'
import Note from './Note'
import List from './List'
import Nav from './Nav'
//
class App extends Component {
    constructor() {
        super()
        this.newId = Date.now()
        this.state = {
            active: {
                id: this.newId,
                title: '',
                body: '',
                date: getFullDate(),
            },
            notes: [],
            editing: false,
            showList: false,
        }
    }

    toggleList = e => {
        this.setState({ showList: !this.state.showList })
    }

    handleChange = e => {
        let { name, value } = e.target
        let active = this.state.active
        active[name] = value
        this.setState({ active: active })
    }

    handleSave = () => {
        if (this.state.active.title === '' && this.state.active.body === '') {
            return false
        }

        let notes = [...this.state.notes]
        if (this.state.editing) {
            notes[this.state.active.id] = this.state.active
        } else {
            notes.push(this.state.active)
        }

        this.setState({ notes: notes, editing: true })
    }

    handleNew = () => {
        let newActive = {
            id: Date.now(),
            title: '',
            body: '',
            date: getFullDate(),
        }
        this.setState({ active: newActive, editing: false })
    }

    handleSelected = e => {
        let notes = [...this.state.notes]
        let newActive = notes.filter(note => note.id === Number(e.target.id))[0]
        this.setState({ active: newActive, editing: true, showList: false })
    }

    handleDelete = (e, id) => {
        e.stopPropagation()
        if (window.confirm('Are you sure you wish to delete this note?')) {
            let notes = [...this.state.notes]
            let newNotes = notes.filter(note => note.id !== id)

            this.setState({ notes: newNotes })
            this.handleNew()
        }
    }

    render() {
        return (
            <Wrapper list={this.state.showList}>
                <List
                    notes={this.state.notes}
                    onSelected={this.handleSelected}
                    onToggle={this.toggleList}
                    onDelete={this.handleDelete}
                ></List>
                <Note note={this.state.active} onChange={this.handleChange} />
                <Nav
                    onToggleList={this.toggleList}
                    active={this.state.active}
                    onNewNote={this.handleNew}
                    onSave={this.handleSave}
                />
            </Wrapper>
        )
    }
}

export default App
