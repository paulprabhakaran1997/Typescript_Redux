import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../redux/store/store';
import userReducer, { displayUser } from '../../redux/reducers/userReducer';


const Login = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const userNameRef = useRef<HTMLInputElement | null>(null);

    const handleLogin = () =>{
        localStorage.setItem('tokenId' , JSON.stringify("1"))
        console.log("Username = " , userNameRef.current?.value);
        
        const name = userNameRef.current?.value! 

        dispatch(displayUser(name))

        
        navigate("/")
    }

    

    return (
        <div>
            <h1>LOGIN</h1>
            <input type="text" ref={userNameRef}  />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login