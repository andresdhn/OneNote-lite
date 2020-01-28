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
        this.setState({ body: '' })
    }

    handleSave = () => {
        this.props.onNoteChanged(this.state.body)
    }

    render() {
        return (
            <article className="note">
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
            </article>
        )
    }
}

export default Note
