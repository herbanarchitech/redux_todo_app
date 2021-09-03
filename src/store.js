import {createStore, applyMiddleware} from 'redux'
///import think from 'redux-thunk'
import reducer from '../reducers'


const store = createStore(reducer())

export default store


