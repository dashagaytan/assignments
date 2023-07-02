import React from "react";
import Issue from "./Issue.js"

export default function IssueList(props){
    const { issues } = props

    return (
        <div className="issue-list">
        {issues &&
            issues.map((issue) => (
              <Issue issue={issue} key={issue._id} /> // Add a unique key prop
            ))}
        </div>
    )
}


