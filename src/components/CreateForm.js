import React, { Component } from 'react'
import Button from './Button'
//
class CreateForm extends Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            notename: '',
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        if (this.state.notename.length > 0) {
            this.props.onNewNote(this.state.notename)
            this.setState({ notename: '' })
        }
    }

    render() {
        return (
            <form id="HeaderForm" onSubmit={e => this.handleSubmit(e)}>
                {/* Todo: Create Note Editing Heading */}
                <div className="form__group">
                    <input
                        type="text"
                        className="form__control"
                        placeholder="Add a new note"
                        value={this.state.notename}
                        onChange={e =>
                            this.setState({ notename: e.target.value })
                        }
                    />
                    <Button color="green" onClicked={this.handleSubmit}>
                        Save
                    </Button>
                </div>
            </form>
        )
    }
}
export default CreateForm
