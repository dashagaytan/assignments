import React, { useState } from "react";
import Issue from "./Issue.js"

export default function IssueList(props){
    const { issues, issueList, setIssueList, userState, userAxios, page, deleteComment } = props

    const [userErr, setUserErr] = useState("")

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