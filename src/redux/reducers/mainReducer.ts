import { combineReducers } from '@reduxjs/toolkit'
import userReducer from './userReducer'
import userListReducer from './userListReducer'

const mainReducer = combineReducers({
    userReducer : userReducer,
    userListReducer : userListReducer
})

export type RootState = ReturnType<typeof mainReducer>

export default mainReducer