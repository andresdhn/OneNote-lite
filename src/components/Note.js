import React from 'react'
//
const Note = props => (
    <div id="note">
        <section className="note__header">
            <div className="container">
                <input
                    type="text"
                    className="note__title"
                    placeholder="Title..."
                    value={props.title}
                    onChange={props.onTitleChange}
                />
            </div>
        </section>
        <section className="note__body">
            <div className="container">
                <textarea
                    className="note__body"
                    onChange={props.onBodyChange}
                    value={props.body}
                    placeholder="What's on your mind?..."
                ></textarea>
            </div>
        </section>
    </div>
)

export default Note
