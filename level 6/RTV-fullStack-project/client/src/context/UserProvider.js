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
    // const [userErr, setUserErr] = useState("")

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
    
   // add comment under posted issue
function addComment(commentId, issueId) {
    userAxios
      .post(`/api/comment`, { issue: issueId, comment: commentId })
      .then(res => {
        const updatedIssues = issueList.map(issue => {
          if (issueId === issue._id) {
            return {
              ...issue,
              comments: [...issue.comments, res.data._id]
            };
          }
          return issue;
        });
        setIssueList(updatedIssues);
      })
      .catch(err => {
        if (err.response && err.response.data && err.response.data.errMsg) {
          console.log(err.response.data.errMsg);
        } else {
          console.log("An error occurred while adding a comment.");
        }
        });
  }

  // delete comment 
  function deleteComment(commentId, issueId){
    userAxios.delete(`/api/comment/${commentId}`)
    .then(res => {
        const updatedComments = issueList.map(issue => {
            if(issueId === issue._id){
                return {
                    ...issue,
                    comments: issue.comments.filter(comment =>comment._id !== commentId )
                }
            }
            return issue;
        })
        setIssueList(updatedComments)
    })
    .catch(err => console.log(err.response.data.errMsg))
  }
  
    
    return (
        <UserContext.Provider
        value={{
            ...userState,
            signup,
            login,
            logout,
            addIssue,
            issueList,
            page,
            setPage,
            sortByVotes,
            resetAuthErr,
            addComment,
            deleteComment
        }}>

            {props.children}
        </UserContext.Provider>
    )
}