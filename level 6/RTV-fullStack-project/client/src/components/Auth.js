import React, { useState } from "react";
import AuthForm from './AuthForm.js'
import {UserContext} from '../context/UserProvider.js'

const initInputs = {username: "", password: ""}

export default function Auth(){
    const [inputs, setInputs] = useState(initInputs)
    const [toggle, setToggle] = useState(false)
    
    return(
        <div className="auth-container">

        </div>
    )
}