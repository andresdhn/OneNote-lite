import React, { Component } from 'react'
//
class HeaderForm extends Component {
    constructor() {
        super()
        this.state = {
            notename: '',
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.onNoteSubmitted(this.state.notename)
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
