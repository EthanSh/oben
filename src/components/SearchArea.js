import React from 'react'
import PropTypes from 'prop-types'
import SearchButton from './SearchButton'
import SearchItemList from './SearchItemList'

const SearchArea = ({querys, actions}) => (

    <div>
        <SearchItemList querys={querys} {...actions}/>
        <SearchButton onClick={() => actions.showMeal(querys.search)}/>
    </div>

)

SearchArea.propTypes = {
    actions: PropTypes.object.isRequired
}

export default SearchArea