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
                        <imput
                            className="form__control"
                            onChange={e =>
                                this.setState({ notename: e.target.value })
                            }
                        />
                    </div>
                </form>
            </div>
        )
    }
}
export default HeaderForm
