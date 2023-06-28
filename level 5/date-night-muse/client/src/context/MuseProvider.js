import React, {useState, createContext, useEffect} from "react"
import axios from "axios"

export const MuseContext = createContext();

const userAxios = axios.create();

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization =`Bearer ${token}`
    return config 
})

export default function MuseProvider({children}){
    const initState = {
        user: {} || JSON.parse(localStorage.getItem("user")),
        token: localStorage.getItem("token") || "",
        errMsg: ''
    }
    const [userState, setUserState] = useState(initState);
   
    // signup
    function signup(credentials){
        axios.post("/auth/signup", credentials)
        .then(res => {
            const {user, token} = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            setUserState(prevState => ({
                ...prevState,
                user,
                token
            }))
        })
        .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    //login
    function login(credentials){
        axios.post("/auth/login", credentials)
        .then(res => {
            const {user, token} = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            getHeadOutDates()
            getStayInDates()
            setUserState(prevState => ({
                ...prevState,
                user,
                token
            }))
        })
        .catch(err => handleAuthErr(err.response.data.errMsg))
    }

      //logout
      function logout(){
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: {},
            token: ""
        })
    }

    // handle auth error 
    function handleAuthErr(errMsg){
        setUserState(prevState => ({
            ...prevState,
            errMsg
        }))
    }
    
        function resetAuthErr(){
            setUserState(prevState => ({
                ...prevState,
                errMsg: ""
            }))
        } 

    const [stayIn, setStayIn] = useState([])
    const [headOut, setHeadOut] = useState([]) 

    // get request: stay in date ideas
    function getStayInDates(){
        userAxios.get('/api/stayIn')
        .then(res => {
            console.log(res.data)
            setStayIn(res.data);
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    useEffect(()=> {
        getStayInDates();
    },[])

    // get request: head out date ideas
    function getHeadOutDates(){
        userAxios.get("/api/headOut")
        .then(res => {
            console.log(res.data)
            setHeadOut(res.data);
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    useEffect(()=> {
        getHeadOutDates();
    },[])

    // filter date ideas by category
    function filterStayIn(e){
        if(e.target.value === "reset"){
            getStayInDates()
        } else {
            userAxios.get(`/api/stayIn/search/category?category=${e.target.value}`)
            .then(res => setStayIn(res.data))
            .catch(err => console.log(err))
        }
    }

    function filterHeadOut(e){
        if(e.target.value === "reset"){
            getHeadOutDates()
        } else {
            userAxios.get(`/api/headOut/search/category?category=${e.target.value}`)
            .then(res => setHeadOut(res.data))
            .catch(err => console.log(err))
        }
    }

    return(
        <MuseContext.Provider value={{
            ...userState,
            login,
            logout,
            signup,
            getStayInDates,
            getHeadOutDates,
            filterStayIn,
            filterHeadOut,
            stayIn,
            headOut,
            resetAuthErr
        }}>       
            {children}

        </MuseContext.Provider>
    )
}
