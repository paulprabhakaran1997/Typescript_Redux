import React from 'react'
import { IRouteProps } from './@types'
import { Navigate } from 'react-router-dom'

const PrivateRouting = (props : IRouteProps) => {
    const { children } = props
    const authtoken = JSON.parse(localStorage.getItem('tokenId')!)

    return (
        (!!authtoken && authtoken !== "") ? <React.Fragment>{children}</React.Fragment> : <Navigate to={"/login"} />
    )
}

export default PrivateRouting