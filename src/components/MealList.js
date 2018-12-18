import React from 'react'
import PropTypes from 'prop-types'
import Meal from './Meal'

const MealList = ({allMeals, finishMeal}) => (
    <ul className="mealList">
        {allMeals.map( (meal, index) =>
            <Meal key={index} meal={meal} complete={finishMeal}/>
        )}
    </ul>
)

MealList.propTypes = {
    allMeals: PropTypes.array.isRequired
}

export default MealList 