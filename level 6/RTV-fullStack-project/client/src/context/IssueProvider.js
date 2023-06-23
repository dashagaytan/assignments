import React, {useState}from "react";
import axios from "axios";

export const IssueContext = React.createContext();

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization =`Bearer ${token}`
    return config 
})

export default function IssueProvider(props){
    const initInputs={
        title: "",
        description: "",
        votes: 0,
        voters: []
    }

    const commentsInput = {
        comment: '',
        issue: ''
    }

    const [inputs, setInputs]= useState(initInputs)
    const [comments, setComments]= useState(commentsInput)

    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
            issues: [],
            errMsg: ""
        }
    const [userState, setUserState] = useState(initState)

    // get all issues
    function getIssues(){
        userAxios.get('/api/issue')  // api request using an instance of Axios with authorization headers
        .then(res => {
            Promise.all(res.data.map(async issue => {
                return {
                    ...issue,
                    comments: await getIssueComments(issue._id).then(comments => {
                        issue.comments = comments;
                        return comments
                    })
                }
            }))
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                     issues: res
                 }))
             })
            })
            .catch(err => console.log(err.response.data.errMsg))
        }
    
 
    // get issue by user | using JS object Promise constructor to manage asynchronous operation 
    function getUserIssue(){
        userAxios.get('/api/issue/user')
        .then(res => {
            Promise.all(res.data.map(async issue => {
                return {
                    ...issue,
                    comments: await getIssueComments(issue._id).then(comments => {
                        issue.comments = comments;
                        return comments
                    })
                }
            }))
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                     issues: res
                 }))
             })
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    // add issue 
    function addIssue(newIssue){
        userAxios.post('/api/issue', newIssue)
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                issue: [...prevState.issues, res.data]
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    // delete issue by issue id
    function deleteIssue(issueId){
        userAxios.delete(`/api/issue/${issueId}`)
        .then(res => {
            console.log(res)
            return setUserState(prevInputs => ({
                ...prevInputs,
                issues: [...prevInputs.issues.filter(issue=> issue._id !== issueId)]
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    // get comments made by a specific user for an issue
    function getIssueComments(userId){
        const newData = userAxios.get(`/api/comment/${userId}`) // newData = result of an asunchronous operation 
        .then(res => {
            setUserState (prevState => ({
                ...prevState,
            })) 
            return res.data 
        })
        .catch (err => console.log(err.response.data.errMsg))
        return newData
    }

    // add comment to an existing issue
    function addComment(){
        console.log(comments)
        userAxios.post('/api/comment', comments)
        .then(res => {
            setUserState(prevState => {
                // console.log('prevState State', prevState)
                const issues = prevState.issues.find((issue) => issue._id === res.data.issue)
                issues.comments.push(res.data)
                return ({
                    ...prevState,
                })
            })
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    // handle upvote and downvote
    function handleVoting(vote, issueId){
        userAxios.put(`/api/issue/${vote}/${issueId}`)
        .then(res => {
            setUserState((prevState) => ({
                ...prevState,
                issues: [res.data]
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    return (
        <IssueContext.Provider value={{
            ...userState,
            setInputs,
            inputs,
            initInputs,
            comments,
            setComments,
            getIssues,
            getUserIssue,
            addIssue,
            deleteIssue,
            addComment,
            handleVoting
            
        }}>
            {props.children}
        </IssueContext.Provider>
    )
}
