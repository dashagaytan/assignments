import React, {useState} from "react";
import axios from 'axios'

export const UserContext = React.createContext();

const userAxios = axios.create()
userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization =`Bearer ${token}`
    return config
})

export default function UserProvider(props){

    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        issues: []
    }

    const [userState, setUserState] = useState(initState)

    // Signup
    function signup(credentials){ 
        axios.post("/auth/signup", credentials)
        .then(res => {
            const {user, token} = res.data
            // save user in local storage
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            setUserState(prevState=> ({
                ...prevState,
                user,
                token
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    // Login
    function login(credentials){
        axios.post("/auth/login", credentials)
        .then(res => {
            const {user, token} = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            getUserIssue()
            setUserState(prevState=> ({
                ...prevState,
                user,
                token
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    //logout
    function logout(){
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: {},
            token: "",
            issues: []
        })
    }

    // get user issues
    function getUserIssue(){
        userAxios.get("/api/issue/user")
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    issues: res.data
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    // get all posted issues
    function getAllIssues(issueId){
        userAxios.get("/api/issue")
        .then(res => {
            setUserState(prevState => ({
                ...prevState, issue: res.data
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    // add Issue
    function addIssue(newIssue){
        userAxios.post("/api/issue", newIssue)
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                issues: [...prevState.issues, res.data]
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }
    
    //Delete Issue
    function deleteIssue(issueId){
        userAxios.delete(`/api/issue/${issueId}`)
        .then(res => console.log(res.data))
        .catch(err => console.log(err.response.data.errMsg))
        getUserIssue();
    }

    // upvote issue
    function upvote(issueId){
        userAxios.put(`/api/issue/upvote/${issueId}`)
        .then(res => console.log(res.data))
        .catch(err => console.log(err.response.data.errMsg))

        getAllIssues();
    }

    // downvote issue
    function downvote(issueId){
        userAxios.put(`/api/issue/downvote/${issueId}`)
        .then(res => console.log(res.data))
        .catch(err => console.log(err.response.data.errMsg))

        getAllIssues()
    }


    return (
        <UserContext.Provider
         value={{
            ...userState,
            signup,
            login,
            logout,
            addIssue,
            deleteIssue,
            getUserIssue,
            getAllIssues,
            upvote,
            downvote, 
            userAxios
        }}>

            {props.children}
        </UserContext.Provider>
    )
}