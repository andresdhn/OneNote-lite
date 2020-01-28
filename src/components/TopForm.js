import React, { Component } from 'react'
import Button from './Button'
//
class TopForm extends Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)

        this.state = {
            title: '',
        }
    }

    handleSubmit = e => {
        e.preventDefault()

        if (this.state.title.length > 0) {
            this.props.onNewNote(this.state.title)
            this.setState({ title: '' })
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {this.props.editing ? (
                    <h1>{this.props.title}</h1>
                ) : (
                    <div className="form__group">
                        <input
                            type="text"
                            className="form__control"
                            placeholder="Add a new note"
                            value={this.state.title}
                            onChange={e =>
                                this.setState({ title: e.target.value })
                            }
                        />
                        <Button color="green" onClicked={this.handleSubmit}>
                            Save
                        </Button>
                    </div>
                )}
            </form>
        )
    }
}
export default TopForm
