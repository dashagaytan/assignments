import React, { useContext, useEffect, useRef } from "react";
import IssueForm from "./IssueForm.js";
import IssueList from "./IssueList.js"
import { IssueContext } from "../context/IssueProvider";


export default function Profile(){
    const getData = useRef(false)  // helps store mutable values that wont be triggered on re-render 
    const {user: { username}, addIssue, issues, getUserIssue} = useContext(IssueContext)

    // gall getUserIssue() when component renders for the first time.
    useEffect(()=> {
        if(!getData.current)
        getUserIssue();
        getData.current = true  // to ensure that getUserIssue function is called once during the component's lifecycle
    }, [getUserIssue])  // dependency array that triggers useEffect only when getUserIssue function changes

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