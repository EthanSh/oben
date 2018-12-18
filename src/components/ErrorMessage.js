import React from 'react'
import PropTypes from 'prop-types'

let listStyle = {
    with: '100%',
    border: '1px solid #d93025',
    background: '#fce8e6',
    color: '#d93025',
    padding: '2px 3px'
}

const ErrorMessage = ({text}) => (
    <div style={listStyle}>
        Error! No menu generated for {text}
    </div>
)

ErrorMessage.propTypes = {
	text: PropTypes.string.isRequired
}

export default ErrorMessage