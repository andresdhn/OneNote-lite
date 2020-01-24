import React, { Component } from 'react'
//
class HeaderForm extends Component {
    constructor() {
        super()
        this.state = {
            notename: '',
        }
    }

    clearTextBox = () => {
        this.setState({ notename: '' })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.onNoteSubmitted(this.state.notename)
        this.clearTextBox()
    }

    render() {
        return (
            <div id="HeaderForm">
                <form onSubmit={e => this.handleSubmit(e)}>
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
                        <input
                            type="submit"
                            className="form__control"
                            value="Save"
                        />
                    </div>
                </form>
            </div>
        )
    }
}
export default HeaderForm
