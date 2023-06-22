import React, { useState } from "react";
import Issue from "./Issue.js"

export default function IssueList(props){
    const { issues, issueList, setIssueList, userState, userAxios, page, deleteComment } = props

    const [userErr, setUserErr] = useState("")

    //  // handle posted issues upvotes and downvotes 
    function handleUpvote(voteId){
        const issueToUpdate = issueList.find(issue => issue._id === voteId)
        if(!issueToUpdate){
            return null
        }
        if(userState.user._id === issueToUpdate.user){
            return setUserErr("Cannot vote on your own issue!")
        }
        if(issueToUpdate.votedUsers.includes(userState.user._id)){
            return setUserErr("You have already voted!")
        }
        setUserErr(" ")
        userAxios.put(`/api/issue/upvote/${voteId}`)
        .then(res => {
            const updatedIssueList = issueList.map(issue => issue._id === voteId ? res.data : issue)
            setIssueList(updatedIssueList)
        })
        .catch(err => console.log(err))
    }

    function handleDownvote(voteId){
        const issueToUpdate = issueList.find(issue => issue._id === voteId)
        if(!issueToUpdate){
            return null
        }
        if(userState.user._id === issueToUpdate.user){
            return setUserErr("Cannot vote on your own issue!")
        }
        if(issueToUpdate.votedUsers.includes(userState.user._id)){
            return setUserErr("You have already voted!")
        }
        setUserErr(" ")
        userAxios.put(`/api/issue/upvote/${voteId}`)
        .then(res => {
            const updatedIssueList = issueList.map(issue => issue._id === voteId ? res.data : issue)
            setIssueList(updatedIssueList)
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="issue-list">
            {issues.map(issue => 
            <Issue
            key={ issue._id}
            {...issue}
            handleUpvote = {handleUpvote}
            handleDownvote = {handleDownvote}
            deleteComment = {deleteComment}
            page = {page}
            userErr = {userErr}
            setUserErr = {setUserErr} />)}
        </div>
    )
}

    //  function handleUpvote(voteId){
    //     issueList.forEach(issue => {
    //         if(issue._id === voteId && userState.user._id === issue.user){
    //             return setUserErr("Cannot vote on your own issue!")
    //         } else if ( issue._id === voteId && issue.votedUsers.include(userState.user._id)){
    //             return setUserErr("You have already voted!")
    //         } else if(issue._id === voteId){
    //             setUserErr(" ")
    //             userAxios.put(`api/issue/upvote/${voteId}`)
    //             .then(res => {
    //                 const updatedIssue = issueList.map(issue => {
    //                     if(voteId === issue._id){
    //                         return res.data
    //                     } else {
    //                         return issue
    //                     }
    //                 })
    //                 setIssueList(updatedIssue)
    //             })
    //             .catch(err => console.log(err))
    //         }else {return null}
    //     })
    // }


    // function handleDownvote(voteId){
    //     issueList.forEach(issue => {
    //         if(issue._id === voteId && userState.user._id === issue.user){
    //             return setUserErr("Cannot vote on your own issue!")
    //         } else if ( issue._id === voteId && issue.votedUsers.include(userState.user._id)){
    //             return setUserErr("You have already voted!")
    //         } else if(issue._id === voteId){
    //             setUserErr(" ")
    //             userAxios.put(`api/issue/downvote/${voteId}`)
    //             .then(res => {
    //                 const updatedIssue = issueList.map(issue => {
    //                     if(voteId === issue._id){
    //                         return res.data
    //                     } else {
    //                         return issue
    //                     }
    //                 })
    //                 setIssueList(updatedIssue)
    //             })
    //             .catch(err => console.log(err))
    //         }else {return null}
    //     })
    // }