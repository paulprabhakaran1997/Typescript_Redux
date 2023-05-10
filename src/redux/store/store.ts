import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers/mainReducer";
import { useDispatch , TypedUseSelectorHook , useSelector } from 'react-redux'

const store = configureStore({
    reducer : mainReducer
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store