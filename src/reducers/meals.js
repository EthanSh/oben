import {FETCH_RESULT} from "../constants/ActionTypes";

const initialState = {
    allMeals: [],
    errors: []
}

export default function retriveMeals(state = initialState, action = {type: FETCH_RESULT, querys:[{
        name: 'Bob',
        from: '2017-01-11',
        to: '2017-01-10'
    }]}) {

    switch (action.type) {
        case FETCH_RESULT:
            let result = {
                allMeals:[],
                errors:[]
            }
            action.querys.forEach( query => {
                let dateRange = [];
                let start = new Date(query.from);
                let end = new Date(query.to);

                while(start <= end){
                    dateRange.push(start);
                    let newDate = start.setDate(start.getDate() + 1);
                    start = new Date(newDate);
                }

                if(new Date(query.from) > new Date(query.to)){
                    result.errors.push(query.name)
                }else{
                    dateRange.forEach(date => {
                        result.allMeals.push({name: query.name, date: date, type:'Breakfast', completed: false})
                        result.allMeals.push({name: query.name, date: date, type:'Lunch', completed: false})
                        result.allMeals.push({name: query.name, date: date, type:'Dinner', completed: false})
                    })
                }
            })

            return result
        default:
            return state
    }
}