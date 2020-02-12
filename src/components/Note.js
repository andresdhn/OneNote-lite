import React from 'react'
//
const Note = props => (
    <div id="note">
        <section className="note__title">
            <div className="container">
                <input
                    type="text"
                    placeholder="Title..."
                    value={props.title}
                    onChange={props.onTitleChange}
                />
            </div>
        </section>
        <section className="note__body">
            <div className="container">
                <textarea
                    onChange={props.onBodyChange}
                    value={props.body}
                    placeholder="What's on your mind?..."
                ></textarea>
            </div>
        </section>
    </div>
)

export default Note
