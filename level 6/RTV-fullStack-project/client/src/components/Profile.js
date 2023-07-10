import React, { useContext, useEffect, useRef } from "react";
import IssueForm from "./IssueForm.js";
import IssueList from "./IssueList.js"
import { IssueContext } from "../context/IssueProvider";


export default function Profile(){
    const getData = useRef(false) 
    const {user: { username}, addIssue, issues, getUserIssue} = useContext(IssueContext)

    // gall getUserIssue() when component renders for the first time.
    useEffect(()=> {
        if(!getData.current)
        getUserIssue();
        getData.current = true 
    }, [getUserIssue])  // dependency array trigger useEffect only when getUserIssue function changes
    console.log(issues)

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