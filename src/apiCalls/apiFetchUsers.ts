import { AnyAction, CombinedState, ThunkDispatch } from "@reduxjs/toolkit";
import API from "../api/api"
import { fetchUser } from "../redux/reducers/userListReducer";
import { Dispatch } from "react";

export const apiFetchUsers = (dispatch: ThunkDispatch<CombinedState<{
    userReducer:any,
    userListReducer:any
}>, undefined, AnyAction> & Dispatch<any[]>) =>{
    API({
        method : 'GET',
        url:'/users'
    }).
    then(res => dispatch(fetchUser(res.data))).
    catch(err => console.log(err))
}