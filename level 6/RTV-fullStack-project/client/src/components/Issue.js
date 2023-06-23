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
        const voted = issue.userVotes.includes(username) //.user.includes used to be votedUsers
        console.log(voted)
        voted ? alert("You have already voted")
        :
        handleVoting(vote, id)
        window.location.reload()
    }

    return (
        <div className="issue-container">
            {user._id === issue.user && (<i className="delete-issue" onClick={() => deleteIssue(issue._id)}>Delete Issue</i>)}
            <h1 className="issue-title">{ issue.title }</h1>
            <p className="issue-description">{ issue.description }</p>
            <div className="votes">
            <br>
            </br>
               <i onClick={() => voting("upvote", issue._id, user.username)} className="upvote">👍🏼 </i>
               <i>{ issue.upvote }</i>
                <i onClick={() => voting("downvote", issue._id, user.username)} className="downvote">👎🏼</i>
                <i>{ issue.downvote }</i>
            </div>
            <>
            <h2>Share your thoughts</h2>
            <br>
            </br>
                <CommentsForm issueId={ issue._id}/>
                <CommentsList issueId={ issue._id} comments={ issue.comments}/>
            </>
            <br>
            </br>
        </div>
    )

}