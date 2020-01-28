import React, { Component } from 'react'
//
class Note extends Component {
    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            id: 0,
            title: '',
            body: '',
        }
    }

    componentDidMount() {
        this.setState({ body: this.props.notebody })
    }

    handleChange = e => {
        this.setState({ notebody: e.target.value })
    }

    render() {
        return (
            <article className="note">
                <textarea
                    onChange={this.handleChange}
                    value={this.state.notebody}
                    placeholder="What's on your mind?..."
                ></textarea>
            </article>
        )
    }
}

export default Note
