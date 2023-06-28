import React, { useContext, useState } from "react";
import { MuseContext } from "../context/MuseProvider.js";
import AuthForm from './AuthForm.js'
import '../style.css'

const initInputs = {username: "", password: ""} 

export default function Auth(){
    const [inputs, setInputs] = useState(initInputs)
    const [toggle, setToggle] = useState(false)
    
    const {signup, login, errMsg, resetAuthErr} = useContext(MuseContext)

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevState => ({
            ...prevState,
            [name]:value
        }))
    }

    function handleSignup(e){
        e.preventDefault();
        //signup function
        signup(inputs)
    }

    function handleLogin(e){
        e.preventDefault();
        //login function
        login(inputs)
    }

    function toggleForm(){
        setToggle(prevState => !prevState)
        resetAuthErr();
    }

    return (
        <div className="auth-container">
        <h1>💖 Date Night Muse 💖</h1>
        {!toggle ? 
            <>
            <AuthForm
                handleChange = {handleChange}
                handleLogin = {handleLogin}
                inputs = {inputs}
                btnTxt = "Login"
                errMsg = {errMsg}
                />
                <p onClick={toggleForm}>Not a Memeber? </p>
            </>
                :
            <>
            <AuthForm
                handleChange = {handleChange}
                handleLogin = {handleSignup}
                inputs = {inputs}
                btnTxt = "Signup"
                errMsg = {errMsg}
                />
               <p onClick={toggleForm}>Already a memebr! </p>
            </>
        }
        </div>

    )
}