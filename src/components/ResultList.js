import React from 'react'
import PropTypes from 'prop-types'
import MealList from './MealList'
import ErrorMessageList from './ErrorMessageList'
import Filter from './Filter'

const ResultList = ({meals, actions}) => (
    <div>
        <Filter filter={actions.setVisibilityFilter}></Filter>
        <ErrorMessageList errors={meals.errors}/>
        <MealList allMeals={meals.allMeals} {...actions}/>
    </div>
)

ResultList.propTypes = {
    meals: PropTypes.shape({
        errors: PropTypes.array.isRequired,
        allMeals: PropTypes.array.isRequired
    }).isRequired
}

export default ResultList