import React, { useContext, useState } from "react";
import AuthForm from './AuthForm.js'
import { UserContext } from '../context/UserProvider.js'

const initInputs = {username: "", password: ""}

export default function Auth(){
    const [inputs, setInputs] = useState(initInputs)
    const [toggle, setToggle] = useState(false)

    const {signup, login} = useContext(UserContext)

    function handleChange(e){
        const {name, value} =e.target
        setInputs(prevState=> ({
            ...prevState, 
            [name]: value
        }))
    }

    function handleSignup(e){
        e.preventDefault()
        //signup
        signup(inputs)

    }

    function handleLogin(e){
        e.preventDefault();
        //login
        login(inputs)
    }

    return(
        <div className="auth-container">
            <h1>ThePoliticalPost</h1>
            {!toggle ? 
                <>
                    <AuthForm
                    handleChange={handleChange}
                    handleSubmit={handleSignup}
                    inputs={inputs}
                    btnText="Sign up"
                    />
                    <p onClick={()=> setToggle(prevState=> !prevState)}>Already a member?</p>
                </>
            :
                <>
                    <AuthForm
                    handleChange={handleChange}
                    handleSubmit={handleLogin}
                    inputs={inputs}
                    btnText="Login"
                    />
                    <p onClick={()=> setToggle(prevState=> !prevState)}>Not a memeber?</p>
                </>
        }
           
        </div>
    )
}