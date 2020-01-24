import React from 'react'
import HeaderForm from './HeaderForm'
//
export default props => (
    <section id="header">
        <div className="container">
            <HeaderForm onNoteSubmitted={props.onNoteSubmitted} />
        </div>
    </section>
)
