// action types
import * as types from '../constants/ActionTypes'

export const addMeal = meal => ({type: types.ADD_MEAL, meal})
export const deleteMeal = meal => ({type: types.DELETE_MEAL, meal})
export const editMeal = meal => ({type: types.EDIT_MEAL, meal})
export const showMeal = querys => ({type: types.FETCH_RESULT, querys})
export const setVisibilityFilter = filter => ({ type: types.SET_VISIBILITY_FILTER, filter})