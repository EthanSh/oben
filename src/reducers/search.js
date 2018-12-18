import {ADD_QUERY} from "../constants/ActionTypes";

const initialState = []

const initialAction = {
    type: ''
}

export default function retriveQuerys(state = initialState, action = initialAction) {

    switch (action.type) {
        case ADD_QUERY:
            return [...state, action.query]
        default:
            return state
    }
}