import React from 'react'
import PropTypes from 'prop-types'
import * as MealFilters from '../constants/MealFilters'

const Filter = ({filter}) => (
    <div>
        <button onClick={()=> filter(MealFilters.SHOW_ALL)}>showall</button>
        <button onClick={()=> filter(MealFilters.SHOW_COMPLETED)}>show completed</button>
        <button onClick={()=> filter(MealFilters.SHOW_ACTIVE)}>show active</button>
    </div>
)

Filter.propTypes = {
	filter: PropTypes.func.isRequired
}

export default Filter