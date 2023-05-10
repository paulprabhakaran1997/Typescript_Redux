import React from "react";
import { Navigate } from "react-router-dom";
import { IRouteProps } from "./@types";


const PublicRouting = (props:IRouteProps) => {
  const { children } = props;
  const authtoken = JSON.parse(localStorage.getItem('tokenId')!)
  
  return (
    (!!authtoken && authtoken !== "") ? <Navigate to="/" /> : <React.Fragment>{children}</React.Fragment>
  )
}

export default PublicRouting