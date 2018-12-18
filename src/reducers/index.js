import { combineReducers } from 'redux'

import meals from './meals'

import visibilityFilter from './visibilityFilter'

export default combineReducers( {meals, visibilityFilter} )