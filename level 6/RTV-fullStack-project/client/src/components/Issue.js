import React, { useContext } from "react";
import { IssueContext } from "../context/IssueProvider";
import { UserContext } from "../context/UserProvider";
import CommentsForm from "./CommentsForm";
import CommentsList from "./CommentsList";

export default function Issue(props){

    const { issue } = props
    const { handleVoting, deleteIssue} = useContext(IssueContext)
    const { user } = useContext(UserContext)

    function voting(vote, id, username){
        const voted = issue.userVotes.includes(username) 
        voted ? alert(" You already voted on this issue")  //determine if user has already voted on the issue
        :
        handleVoting(vote, id)  // else handle voting function is called to allow user to submit their vote
        .then(() => {
            window.location.reload();  // reload the page after voting
        })
        .catch(err => console.log("Error occured while voting...", err))
    }
    return (
        <div className="issue-container">
            {user._id === issue.user && (<em className="delete-issue" onClick={() => deleteIssue(issue._id)}>Delete Issue</em>)}
            <h1>{ issue.title }</h1>
            <p>{ issue.description }</p>
            <div className="votes">
               <em onClick={() => voting("upvote", issue._id, user.username)} className="upvote"> 👍🏼 </em>
               <i>{ issue.upvote }</i>
                <em onClick={() => voting("downvote", issue._id, user.username)} className="downvote"> 👎🏼 </em>
                <i>{ issue.downvote }</i>
            </div>
            <>
            <h2>Leave a comment: </h2>
                <CommentsForm issueId = { issue._id}/>
                <CommentsList issueId = { issue._id} comments = { issue.comments}/>
            </>
        </div>
    )

}