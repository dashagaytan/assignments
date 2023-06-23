import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";
import { IssueContext } from "../context/IssueProvider";

export default function CommentsForm(props){

const { issueId } = props
const { addComment, setComments } = useContext(IssueContext)
const { user: {username} } = useContext(UserContext)
const [comment, setComment] = useState("")

function handleChange(e){
    const {name, value} = e.target
    setComments(prevState => ({
        ...prevState,
        [name]: value,
        commentedBy: username,
        issue: issueId
    }))
    setComment(value)
}

function handleSubmit(e){
   e.preventDefault();
   addComment(comment)
   setComment('') //reset textarea after comment was added
}

    return(
        <form onSubmit={handleSubmit} className="comment-form">
            <input
                type="text"
                name="comment"
                value={comment}
                onChange={handleChange}
                placeholder = "Leave a comment . . . "
                />
            <button>Post</button>
        </form>
    )
}