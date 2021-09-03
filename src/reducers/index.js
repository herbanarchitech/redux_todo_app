import {combineReducers} from 'redux'

import {toDoReducer} from './toDoReducer'


//this will allow to you stick a bunch of combineReducers
const reducer = combineReducers({
    toDoReducer: toDoReducer
})

export default reducer