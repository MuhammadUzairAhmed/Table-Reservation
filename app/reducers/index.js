import { combineReducers  } from 'redux'
import groReducer from './groReducers'

const allReducer = combineReducers({
    gro: groReducer
})

export default allReducer