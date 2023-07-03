import React, { useContext } from "react";
import { IssueContext } from "../context/IssueProvider";
import { UserContext } from "../context/UserProvider";
import CommentsForm from "./CommentsForm";
import CommentsList from "./CommentsList";
import "../style/style.css"

export default function Issue(props){

    const { issue } = props
    const { handleUpvote, handleDownvote, deleteIssue} = useContext(IssueContext)
    const { user } = useContext(UserContext)      

    const issueId = issue._id ? issue._id : "";

    return (
        <div className="issue-container">
            <h1 className="issue-title">{ issue.title }</h1>
            <br/>
            <p className="issue-description">{ issue.description }</p>
                <div className="votes">
                <br/>
                <i 
                    className="upvote"
                    style={{borderRadius: "25px", padding: "5px"}} 
                    onClick={() => handleUpvote(issueId)}>
                    👍🏼
                 </i>
                <span>{ issue.upvote }</span>
                <i 
                    className="downvote"
                    style={{borderRadius: "25px", padding: "5px"}} 
                    onClick={() => handleDownvote(issueId)}>
                    👎🏼
                </i>
                <span>{ issue.downvote }</span>
                </div>
                <br/>
            {user._id === issue.user && (<i className="delete-issue" onClick={() => deleteIssue(issue._id)}>X</i>)}
                <>
                <br/>
                    <CommentsForm issueId={ issue._id}/>
                    <CommentsList issueId={ issue._id} comments={ issue.comments}/>
                </>
                <br/>
        </div>
    )

}