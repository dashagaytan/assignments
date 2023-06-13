import React from "react";
import Issue from "./Issue.js"

export default function IssueList(props){
    const {issues} = props
    return (
        <div className="issue-list">
            {issues.map(issue =>
             <Issue key={issue.id} 
             issue={issue}
              />
            )}
        </div>
    )
}