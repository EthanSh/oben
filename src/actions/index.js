// action types
import * as types from '../constants/ActionTypes'

export const addQuery = query => ({type: types.ADD_QUERY, query})
export const deleteQuery = id => ({type: types.DELETE_QUERY, id})
export const editQuery = query => ({type: types.EDIT_QUERY, query})
export const showMeal = querys => ({type: types.FETCH_RESULT, querys})
export const finishMeal = id => ({type: types.FINISH_MEAL, id})
export const setVisibilityFilter = filter => ({ type: types.SET_VISIBILITY_FILTER, filter})