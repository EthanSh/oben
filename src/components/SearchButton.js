import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';

let searchButtonStyle = {
    float: 'right'
}

const SearchButton = ({onClick}) => (

    <Button style={searchButtonStyle} variant="outlined" color="primary" onClick={onClick}>GET MEALS SCHEDULES</Button>

)

SearchButton.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default SearchButton