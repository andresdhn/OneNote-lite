import React, { Component } from 'react'
//
class NotePad extends Component {
    constructor() {
        super()
        this.state = {
            notebody: '',
        }
    }

    componentDidMount() {
        this.setState({ notebody: this.props.notebody })
    }

    render() {
        return (
            <section id="notepad">
                <textarea
                    value={this.state.notebody}
                    onChange={e => this.setState({ notebody: e.target.value })}
                ></textarea>
                {/* Todo: Create form to save or delete*/}
            </section>
        )
    }
}

export default NotePad
