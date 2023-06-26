import React, {useState, createContext} from "react";
import axios from "axios";

const UserContext = createContext();

const userAxios = axios.create()
userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization =`Bearer ${token}`
    return config
})

export default function UserProvider({children}){
    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        errMsg: ""
    }

    const [userState, setUserState] = useState(initState)

    return (
        <UserContext.Provider value = {{

        }}> 
            {children}
        </UserContext.Provider>
    )
}