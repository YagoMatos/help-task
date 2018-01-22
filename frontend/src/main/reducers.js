import { combineReducers } from 'redux'
import taskReducer from '../task/taskReducer'

const rootReducers = combineReducers({
    task: taskReducer
})

export default rootReducers