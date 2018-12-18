import React from 'react'
import PropTypes from 'prop-types'

const SearchButton = ({onClick}) => (

    <button onClick={onClick}>GET MEALS SCHEDULES</button>

)

SearchButton.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default SearchButton