import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";
import { IssueContext } from "../context/IssueProvider";

export default function CommentsForm(props){

    const { issueId } = props
    const { addComment } = useContext(IssueContext)
    const { user: {username} } = useContext(UserContext)
    const [comment, setComment] = useState("")
    
    function handleChange(e){
        const {value} = e.target
        setComment(value)

    }

    function handleSubmit(e){
        e.preventDefault();
        const newComment = {
            comment,
            commentedBy: username, // sets the username on the server side (comment model)
            issue: ""
        }
        addComment(newComment, issueId)
        .then(() => {
            setComment('') //reset textarea after comment was added
        })
        .catch(err => console.log('Error adding comment: ', err.response.data.errMsg))
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