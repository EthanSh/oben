import React from 'react'
import PropTypes from 'prop-types'
import Meal from './Meal'
import List from '@material-ui/core/List';

const MealList = ({allMeals, finishMeal}) => (
    <List className="mealList">
        {allMeals.map( (meal, index) =>
            <Meal key={index} meal={meal} complete={finishMeal}/>
        )}
    </List>
)

MealList.propTypes = {
    allMeals: PropTypes.array.isRequired
}

export default MealList 