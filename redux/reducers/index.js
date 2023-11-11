import { combineReducers } from 'redux'
import infoReducer from './infoReducer'

const reducers = combineReducers({
    personalInfo: infoReducer
})

export default (state, action) => reducers(state, action)