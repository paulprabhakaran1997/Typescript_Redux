import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from '@reduxjs/toolkit'

interface userState {
    username: string
  }

const initialState  = {
    username : ""
} as userState


const userReducer = createSlice({
    name : 'userReducer',
    initialState,
    reducers : {
        displayUser : (state , action: PayloadAction<string>) =>{
            return {
                ...state,
                username : action.payload
            }
        }
    }
})

export const { displayUser } = userReducer.actions;

export default userReducer.reducer