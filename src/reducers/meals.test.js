import meals from './meals'
import * as types from '../constants/ActionTypes'

describe('meals reducer', () => {
    it('should handle initial state', () => {
        expect(
            meals(undefined, {})
        ).toEqual(
            {
                allMeals: [],
                errors: []
            }
        )
    })

    it('should handle FINISH_MEAL', () => {
        expect(
            meals({
                allMeals: [{id:0, type:'Launch', date:'1', completed: false}],
                errors: []
            }, {
                type: types.FINISH_MEAL,
                id: 0
            })
        ).toEqual({
            allMeals: [{id:0, type:'Launch', date:'1', completed: true}],
            errors: []
        })
    })


    it('should detect Invalid Date Range', () => {
        expect(
            meals({
                allMeals: [],
                errors: []
            }, {
                type: types.FETCH_RESULT,
                querys: [{
                    name: '1',
                    from: '2015-01-03',
                    to: '2015-01-01'
                }]
            })
        ).toEqual({
            allMeals: [],
            errors: ['1']
        })

        expect(
            meals({
                allMeals: [],
                errors: []
            }, {
                type: types.FETCH_RESULT,
                querys: [{
                    name: '1',
                    from: '2015-01-03',
                    to: '2015-01-01'
                },{
                    name: '2',
                    from: '2015-01-03',
                    to: '2015-01-03'
                }]
            })
        ).toEqual({
            allMeals: [{id:0, name: '2', type:'Breakfast', date:new Date('2015-01-04'), completed: false},{id:1, name: '2', type:'Lunch', date:new Date('2015-01-04'), completed: false},{id:2, name: '2', type:'Dinner', date:new Date('2015-01-04'), completed: false}],
            errors: ['1']
        })
    })

    it('should return correct order', () => {
        expect(
            meals({
                allMeals: [],
                errors: []
            }, {
                type: types.FETCH_RESULT,
                querys: [{
                    name: '1',
                    from: '2015-01-03',
                    to: '2015-01-03'
                },{
                    name: '2',
                    from: '2015-01-03',
                    to: '2015-01-03'
                }]
            })
        ).toEqual({
            allMeals: [
                {id:0, name: '1', type:'Breakfast', date:new Date('2015-01-04'), completed: false},
                {id:3, name: '2', type:'Breakfast', date:new Date('2015-01-04'), completed: false},
                {id:1, name: '1', type:'Lunch', date:new Date('2015-01-04'), completed: false},
                {id:4, name: '2', type:'Lunch', date:new Date('2015-01-04'), completed: false},
                {id:2, name: '1', type:'Dinner', date:new Date('2015-01-04'), completed: false},
                {id:5, name: '2', type:'Dinner', date:new Date('2015-01-04'), completed: false}

            ],
            errors: []
        })

    })
})
