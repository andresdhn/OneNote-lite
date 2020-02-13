import React from 'react'
//
const Note = props => (
    <div id="note">
        <section className="note__title">
            <div className="container">
                <input
                    type="text"
                    name="title"
                    value={props.note.title}
                    placeholder="Title..."
                    onChange={props.onChange}
                />
            </div>
        </section>
        <section className="note__body">
            <div className="container">
                <label>{props.note.date}</label>
                <textarea
                    name="body"
                    value={props.note.body}
                    onChange={props.onChange}
                    placeholder="What's on your mind?..."
                ></textarea>
            </div>
        </section>
    </div>
)

export default Note
