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
        // issue: ''
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
            console.log('Response:', res);
            console.log('Response data:', res.data);
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
            getIssues();  
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
// Add comment to an existing issue
function addComment(newComment, issueId) {
    return new Promise((resolve, reject) => {
      userAxios
        .post(`/api/comment/${issueId}`, newComment)
        .then((res) => {
          const updatedIssues = userState.issues.map((issue) => {
            if (issue._id === issueId) {
              return {
                ...issue,
                comments: [...issue.comments, res.data],
              };
            }
            return issue;
          });
  
          setUserState((prevState) => ({
            ...prevState,
            issues: updatedIssues,
          }));
  
          resolve();
        })
        .catch((error) => {
          reject(error.response.data.errMsg);
        });
    });
  }

  function handleUpvote(issueId) {
    userAxios.put(`/api/issue/upvote/${issueId}`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err.response.data.errMsg))
      getIssues();
  }

  function handleDownvote(issueId) {
    userAxios.put(`/api/issue/downvote/${issueId}`) 
      .then(res => console.log(res.data))
      .catch(err => console.log(err.response.data.errMsg))
      getIssues();
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
            handleUpvote,
            handleDownvote
            
        }}>
            {props.children}
        </IssueContext.Provider>
    )
}