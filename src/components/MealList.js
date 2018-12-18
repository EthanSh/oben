import React from 'react'
import PropTypes from 'prop-types'
import Meal from './Meal'

const MealList = ({meals}) => (
    <ul className="mealList">
        {meals.map( (meal, index) =>
            <Meal key={index} meal={meal} />
        )}
    </ul>
)

MealList.propTypes = {
    meals: PropTypes.object.isRequired
}

export default MealList 