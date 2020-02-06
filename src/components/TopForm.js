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
