import React from 'react'
import PropTypes from 'prop-types'
import SearchButton from './SearchButton'

const SearchArea = ({filteredMeals, actions}) => (

    <SearchButton onClick={() => actions.showMeal([{
        name: 'Bob',
        from: '2017-01-11',
        to: '2017-01-10',
    },{
        name: 'Nancy',
        from: '2017-01-11',
        to: '2017-01-12',
    }])}/>

)

SearchArea.propTypes = {
    actions: PropTypes.object.isRequired
}

export default SearchArea