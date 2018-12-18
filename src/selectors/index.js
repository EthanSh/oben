import { createSelector } from 'reselect'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/MealFilters'

const getVisibilityFilter = state => state.visibilityFilter
const getCurrentMeals = state => state.meals

export const getMeals = createSelector(
    [getVisibilityFilter, getCurrentMeals],
    (visibilityFilter, meals) => {
        switch (visibilityFilter) {
            case SHOW_ALL:
                return meals
            case SHOW_COMPLETED:
                return {...meals, allMeals: meals.allMeals.filter(t => t.completed)}
            case SHOW_ACTIVE:
                return {...meals, allMeals: meals.allMeals.filter(t => !t.completed)}
            default:
                throw new Error('Unknown filter: ' + visibilityFilter)
        }
    }
)
