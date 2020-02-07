import React from 'react'
//
export default props => {
    return (
        <div id="note">
            <section id="header">
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
            <section id="body">
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
}
