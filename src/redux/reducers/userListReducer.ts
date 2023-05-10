import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from '@reduxjs/toolkit'

type ulProps = {
    id : number,
    name : string,
    age:string,
    address:string
}

interface userState{
    userlist : ulProps[]
}

const initialState = {
    userlist : []
} as userState


const userListReducer = createSlice({
    name : 'userListReducer',
    initialState,
    reducers : {
        fetchUser : (state , action : PayloadAction<ulProps[]>) =>{
            return {
                ...state,
                userlist : action.payload
            }
        }
    }
});


export const { fetchUser } = userListReducer.actions;

export default userListReducer.reducer