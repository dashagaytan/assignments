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

    const commentInput = {
        comment: '',
        issue: ''
    }

    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
       token: localStorage.getItem("token") || "",
            issues: [],
            errMsg: ""
        }

    const [userState, setUserState] = useState(initState)
    const [inputs, setInputs]= useState(initInputs)
    const [comments, setComments]= useState(commentInput)


    // get all issues
    function getIssues(){
        userAxios.get('/api/issue')  // api request using an instance of Axios with authorization headers
        .then(res => {
          setUserState(prev => ({  
            ...prev,
            issues: res.data,
          }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    // get issue by user 
    function getUserIssue(){
        userAxios.get('/api/issue/user')
        .then(res => {
            setUserState(prevState => ({
              ...prevState,
              issues: res
            }))
        })
      .catch(err => console.log(err.response.data.errMsg))
    }

    // add issue 
    function addIssue(newIssue){
        userAxios.post('/api/issue', newIssue)
        .then(res => {
            setUserState(prev => ({
                ...prev,
                issue: [...prev.issues, res.data]
            }))
        })
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

    // add comment to an existing issue
    function addComment(){
        console.log(comments)
        userAxios.post('/api/comment', comments)
        .then(res => {
            setUserState(prev => {
                console.log('Prev State', prev)
                const issues = prev.issues.find(issue => issue._id === res.data.issue)
                issues.comments.push(res.data)
                return ({
                    ...prev,
                })
            })
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    // handle upvote and downvote
    function handleVoteing(vote, issueId){
        userAxios.put(`/api/issue/${vote}/${issueId}`)
        .then(res => {
            setUserState(prev => ({
                ...prev,
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
            handleVoteing
        }}>
            {props.children}
        </IssueContext.Provider>
    )
}



//  // add comment under posted issue
//  function addComment(commentId, issueId) {
//     userAxios
//       .post(`/api/comment`, { issue: issueId, comments: commentId })
//       .then(res => {
//         const updatedIssues = issueList.map(issue => {
//           if (issueId === issue._id) {
//             return {
//               ...issue,
//               comments: [...issue.comments, res.data._id]
//             };
//           }
//           return issue;
//         });
//         setIssueList(updatedIssues);
//       })
//       .catch(err => {
//         if (err.response && err.response.data && err.response.data.errMsg) {
//           console.log(err.response.data.errMsg);
//         } else {
//           console.log("An error occurred while adding a comment.");
//         }
//         });
//   }

//   // delete comment 
//   function deleteComment(commentId, issueId){
//     userAxios.delete(`/api/comment/${commentId}`)
//     .then(res => {
//         const updatedComments = issueList.map(issue => {
//             if(issueId === issue._id){
//                 return {
//                     ...issue,
//                     comments: issue.comments.filter(comment =>comment._id !== commentId )
//                 }
//             }
//             return issue;
//         })
//         setIssueList(updatedComments)
//     })
//     .catch(err => console.log(err.response.data.errMsg))
//   }