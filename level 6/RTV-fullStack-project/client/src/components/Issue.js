import React, { useContext } from "react";
import { IssueContext } from "../context/IssueProvider";
import { UserContext } from "../context/UserProvider";
import CommentsForm from "./CommentsForm";
import CommentsList from "./CommentsList";
import "../style/style.css"

export default function Issue(props){

    const { issue } = props
    const { handleVoting, deleteIssue} = useContext(IssueContext)
    const { user } = useContext(UserContext)

    function voting(vote, id, username){
        const voted = issue.userVotes.includes(username) //.user.includes used to be votedUsers
        // console.log(voted)
        voted ? alert("You have already voted")
        :
        handleVoting(vote, id)
        window.location.reload()
    }

    return (
        <div className="issue-container">
            <h1 className="issue-title">{ issue.title }</h1>
            <p className="issue-description">{ issue.description }</p>
            <div className="votes">
            <br>
            </br>
               <i style={{borderRadius: "25px", padding: "5px"}} onClick={() => voting("upvote", issue._id, user.username)} className="upvote">👍🏼 </i>
               <i>{ issue.upvote }</i>
                <i style={{borderRadius: "25px", padding: "5px"}} onClick={() => voting("down", issue._id, user.username)} className="downvote">👎🏼</i>
                <i>{ issue.downvote }</i>
            </div>
            <br></br>
            {user._id === issue.user && (<i className="delete-issue" onClick={() => deleteIssue(issue._id)}>X</i>)}
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