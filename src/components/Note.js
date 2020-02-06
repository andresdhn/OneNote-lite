import React, { Component } from 'react'
import Button from './Button'
//
class Note extends Component {
    constructor() {
        super()
        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleBodyChange = this.handleBodyChange.bind(this)
        this.state = {
            title: '',
            body: '',
        }
    }

    handleTitleChange = e => {
        this.setState({ title: e.target.value })
    }

    handleBodyChange = e => {
        this.setState({ body: e.target.value })
    }

    handleClear = () => {
        if (window.confirm('Are you sure you want to clear this note?')) {
            this.setState({ body: '' })
        }
    }

    handleSave = () => {
        this.props.onNoteSaved({
            title: this.state.title,
            body: this.state.body,
        })
    }

    render() {
        return (
            <div id="note">
                <section id="header">
                    <div className="container">
                        <input
                            type="text"
                            className="note__title"
                            placeholder="Title..."
                            value={this.state.title}
                            onChange={this.handleTitleChange}
                        />
                    </div>
                </section>
                <section id="body">
                    <div className="container">
                        <textarea
                            className="note__body"
                            onChange={this.handleBodyChange}
                            value={this.state.body}
                            placeholder="What's on your mind?..."
                        ></textarea>
                    </div>
                </section>
                <section id="footer">
                    <div className="form__group">
                        <Button color="gray" onClicked={this.handleClear}>
                            Clear
                        </Button>
                        <Button color="green" onClicked={this.handleSave}>
                            Save
                        </Button>
                    </div>
                </section>
            </div>
        )
    }
}

export default Note
