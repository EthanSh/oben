import React from 'react'
import PropTypes from 'prop-types'

const ErrorMessage = ({text}) => (
    <div>
        Error! No menu generated for {text}
    </div>
)

ErrorMessage.propTypes = {
	text: PropTypes.string.isRequired
}

export default ErrorMessage