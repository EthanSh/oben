import React from 'react'
import PropTypes from 'prop-types'
import ErrorMessage from './ErrorMessage'

const ErrorMessageList = ({errors}) => (
    <ul>
        {
            errors.map( (error, index)=>
                <ErrorMessage key={index} text={error}/>
            )
        }
    </ul>
)

ErrorMessageList.propTypes = {
    errors: PropTypes.array.isRequired
}

export default ErrorMessageList