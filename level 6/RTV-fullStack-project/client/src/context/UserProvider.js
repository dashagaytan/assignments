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
        issues: [],
        errMsg: ""
    }
    const [userState, setUserState] = useState(initState)
    const [issueList, setIssueList] = useState([])
    const [page, setPage] = useState("")
    const [userErr, setUserErr] = useState("")

    // Signup
    function signup(credentials){ 
        axios.post("/auth/signup", credentials)
        .then(res => {
            const {user, token} = res.data
            // save user in local storage
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            getAllIssues();
            setUserState(prevState=> ({
                ...prevState,
                user,
                token
            }))
        })
        .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    // Login
    function login(credentials){
        axios.post("/auth/login", credentials)
        .then(res => {
            const {user, token} = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            getUserIssue();
            getAllIssues();
            setUserState(prevState=> ({
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
            token: "",
            issues: []
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

    function sortByVotes(){
        issueList && issueList.sort((a,b) => {
            return b.votes -a.votes
        })
    }

    // get all issues 
    function getAllIssues(){
        userAxios.get("api/issue")
        .then(res => setIssueList(res.data))
        .then(sortByVotes())
        .catch(err => console.log(err))
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


    // add Issue
    function addIssue(newIssue){
        userAxios.post("/api/issue", newIssue)
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                issues: [...prevState.issues, res.data]
            }))
            getUserIssue();
            getAllIssues();
        })
        .catch(err => console.log(err.response.data.errMsg))
    }
    
    // delete posted issue 
    // function deleteIssue(issueId){
    //     userAxios.delete(`api/issue/${issueId}`)
    //     .then(res => {
    //         setIssueList(prevState => prevState.filter(issue._id !== issueId))
    //     })
    //     .catch(err => console.log)
    // }
    
    // handle posted issues upvotes and downvotes 
    function handleUpvote(voteId){
        issueList.forEach(issue => {
            if(issue._id === voteId && userState.user._id === issue.user){
                return setUserErr("Cannot vote on your own issue!")
            } else if ( issue._id === voteId && issue.votedUsers.include(userState.user._id)){
                return setUserErr("You have already voted!")
            } else if(issue._id === voteId){
                setUserErr(" ")
                userAxios.put(`api/issue/upvote/${voteId}`)
                .then(res => {
                    const updatedIssue = issueList.map(issue => {
                        if(voteId === issue._id){
                            return res.data
                        } else {
                            return issue
                        }
                    })
                    setIssueList(updatedIssue)
                })
                .catch(err => console.log(err))
            }else {return null}
        })
    }

    function handleDownvote(voteId){
        issueList.forEach(issue => {
            if(issue._id === voteId && userState.user._id === issue.user){
                return setUserErr("Cannot vote on your own issue!")
            } else if ( issue._id === voteId && issue.votedUsers.include(userState.user._id)){
                return setUserErr("You have already voted!")
            } else if(issue._id === voteId){
                setUserErr(" ")
                userAxios.put(`api/issue/downvote/${voteId}`)
                .then(res => {
                    const updatedIssue = issueList.map(issue => {
                        if(voteId === issue._id){
                            return res.data
                        } else {
                            return issue
                        }
                    })
                    setIssueList(updatedIssue)
                })
                .catch(err => console.log(err))
            }else {return null}
        })
    }
    
    return (
        <UserContext.Provider
        value={{
            ...userState,
            signup,
            login,
            logout,
            addIssue,
            resetAuthErr,
            handleUpvote,
            handleDownvote
        }}>

            {props.children}
        </UserContext.Provider>
    )
}