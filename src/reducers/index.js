import { combineReducers } from 'redux'

import meals from './meals'

import search from './search'

import visibilityFilter from './visibilityFilter'

export default combineReducers( {meals, search, visibilityFilter} )