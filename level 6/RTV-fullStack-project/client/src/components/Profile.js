import React, { useContext, useEffect } from "react";
import IssueForm from "./IssueForm.js";
import IssueList from "./IssueList.js"
import { UserContext } from "../context/UserProvider.js";


export default function Profile(){
    const {user: { username}, addIssue, issues, deleteComment,handleUpvote, handleDownvote, page, setPage, sortByVote} = useContext(UserContext)
    
    //render all user posts on at login
    useEffect(() => {
        // getUserIssue();
    },[])

    return (
        <div className="profile">

            <h1>ThePoliticalPost</h1>
            <h4>HI, @{username}</h4>
            <h4> Post an Issue</h4>
            <IssueForm addIssue={addIssue}/>
            <h4>Your Posted Issues</h4>
            <IssueList 
            deleteComment ={deleteComment}
            issues={issues}
            page={page}
            handleDownvote={handleDownvote}
            handleUpvote={handleUpvote}
            />

        </div>
    )
}