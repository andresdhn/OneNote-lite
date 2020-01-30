import React, { Component } from 'react'
import Button from './Button'
//
class Note extends Component {
    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            body: '',
        }
    }

    componentDidMount() {
        this.setState({
            body: this.props.body,
        })
    }

    handleChange = e => {
        this.setState({ body: e.target.value })
    }

    handleClear = () => {
        if (window.confirm('Are you sure you want to clear this note?')) {
            this.setState({ body: '' })
        }
    }

    handleSave = () => {
        this.props.onNoteChanged(this.state.body)
    }

    render() {
        return (
            <div className="note">
                <section id="header">
                    <div className="container">{this.state.title}</div>
                </section>
                <section id="body">
                    <textarea
                        onChange={this.handleChange}
                        value={this.state.body}
                        placeholder="What's on your mind?..."
                    ></textarea>
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
