import React, { useContext } from "react";
import IssueForm from "./IssueForm.js";
import IssueList from "./IssueList.js"
import Issue from "./Issue.js"
import { UserContext } from "../context/UserProvider.js";


export default function Profile(props){
    const {user: { username}, addIssue, issues} = useContext(UserContext)
    
    return (
        <div className="profile">
            <h1>ThePoliticalPost</h1>
            <h4>HI, @{username}</h4>
            <h4> Post an Issue</h4>
            <IssueForm addIssue={addIssue}/>
            <h4>Your Posted Issues</h4>
            <IssueList issues={issues}/>
        </div>
    )
}