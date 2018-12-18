import React from 'react'
import PropTypes from 'prop-types'
import SearchItem from './SearchItem'

const SearchItemList = ({querys, addQuery}) => (

    <div>
        <ul>
            {querys.search.map((query,index) => <li key={index}>{query.name}: {query.from} - {query.to}</li>)}
        </ul>
        <SearchItem addQuery={addQuery}/>
    </div>

)

SearchItemList.propTypes = {
    querys: PropTypes.object.isRequired,
    addQuery: PropTypes.func.isRequired
}

export default SearchItemList