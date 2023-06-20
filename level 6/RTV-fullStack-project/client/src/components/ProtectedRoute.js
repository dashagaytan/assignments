import React from "react";
import {Navigate} from "react-router-dom"

function ProtectedRoute(props){
    const {token, children, rederectTo} = props
    return token ? children : <Navigate to={rederectTo} />
}

export default ProtectedRoute;