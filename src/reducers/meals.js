import {FETCH_RESULT, FINISH_MEAL} from "../constants/ActionTypes";

const initialState = {
    allMeals: [],
    errors: []
}

const initialAction = {
    type: ''
}

export default function retriveMeals(state = initialState, action = initialAction) {

    switch (action.type) {
        case FETCH_RESULT:
            let result = {
                allMeals:[],
                errors:[]
            }
            let index = 0;
            action.querys.forEach( query => {
                let dateRange = [];
                let start = new Date(query.from);
                let end = new Date(query.to);
                while(start <= end){
                    dateRange.push(start);
                    let newDate = start.setDate(start.getDate() + 1);
                    start = new Date(newDate);
                }
                console.log(dateRange)
                if(new Date(query.from) > new Date(query.to)){
                    result.errors.push(query.name)
                }else{
                    dateRange.forEach(date => {
                        result.allMeals.push({name: query.name, date: date, type:'Breakfast', completed: false, id: index++})
                        result.allMeals.push({name: query.name, date: date, type:'Lunch', completed: false, id: index++})
                        result.allMeals.push({name: query.name, date: date, type:'Dinner', completed: false, id: index++})
                    })
                }
            })

            return result
        case FINISH_MEAL:
            let newAllMeals = state.allMeals.map( meal => meal.id === action.id
                ?{...meal, completed: !meal.completed} : meal
            )

            return {...state, allMeals: newAllMeals}
        default:
            return state
    }
}