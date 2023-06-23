import React, { useContext, useEffect } from "react"
import IssueList from "./IssueList"
import { IssueContext } from "../context/IssueProvider"

export default function Public() {
  const {
      user: {
        username
      },
      issues,
      getIssues
    } = useContext(IssueContext)

    useEffect(() => {
      getIssues()
    }, [getIssues])

  return (
    <div className="public-container">
      <h1>{username} Welcome to Public Issues</h1>
      <h2>Issues:</h2>
      <IssueList  issues={ issues }/>
 
    </div>
  )
}