import React, { useContext, useEffect } from "react"
import IssueList from "./IssueList"
import { UserContext } from "../context/UserProvider"

export default function Public() {
  const {
    issueList,
    handleUpvote,
    hadnleDownvote,
    setPage,
    userErr,
    setUserErr, 
    sortByVotes } = useContext(UserContext)

  useEffect(() => {
    setPage("public")
    sortByVotes()
  }, [])

  return (
    <div className="public-container">
      <h1>Issues</h1>
      <IssueList
        issues={issueList}
        upVote={handleUpvote}
        hadnleDownvote={hadnleDownvote}
        userErr={userErr}
        setUserErr={setUserErr} />
    </div>
  )
}