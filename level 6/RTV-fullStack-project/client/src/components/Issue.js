import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";
import CommentsForm from "./CommentsForm";
import CommentsList from "./CommentsList";

export default function Issue(props){
    const [toggle, setToggle]= useState(false)
    const [comments, setComments] = useState([])

    const {title, description, commentedBy, upvoted, downvoted, _id} = props
    const {user: {username}, upvote, downvote, userAxios} = useContext(UserContext)

    // Get comments per issue
    function getComments(issueId){
        userAxios.get(`/api/comments/${issueId}`)
        .then(res => setComments(res.data))
        .catch(err => console.log(err.response.data.errMsg))
    }

    // Post comment to issue
    function addComment(issueId, newComment){
        userAxios.post(`/api/comments/${issueId}`)
        .then(res => {setComments(res.data)})
        .catch(err => console.log(err.response.data.errMsg))
    }

    const handleToggle = (_id) => {
        getComments(_id)
        setToggle(prevState => !prevState)
    }

    const voteCount = upvoted.length - downvoted.length
    
    return (
        <div className="issue">
            <h1>{ title }</h1>
            <h3>{ description }</h3>
            {username !== commentedBy.username && <p>posted by: {commentedBy.username}</p>}
            <p>Votes: {voteCount}</p>
            <button className="likeBtn" onClick={()=> upvote(_id)}>Like</button>
            <button className="dislikeBtn" onClick={() => downvote(_id)}>Dislike</button>

            <button onClick={() => handleToggle(_id)}>{toggle ? "Close Comments" : "Show Comments"}</button>

           {handleToggle && <CommentsForm
            addComment = {addComment}
            _id = {_id}
            />}
            {handleToggle && <CommentsList
            comments = {comments}
            />}
        </div>
    )
} 