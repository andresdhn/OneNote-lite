import React from 'react'
//
const Wrapper = props => <main id="content" className={ props.list ? 'list--open' : '' }>{props.children}</main>

export default Wrapper
