import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";
import CommentsForm from "./CommentsForm";
import CommentsList from "./CommentsList";

export default function Issue(props){
    // const [toggle, setToggle]= useState(false)
    const [inputComments, setInputComments] = useState(false)
    const [error, setError] = useState(false)

    const {title, description, _id, handleUpvote, handleDownvote, page, username, userErr, comments} = props
    const {addComment, deleteComment} = useContext(UserContext)

    function displayUserErr(id){
        if(id === _id){
            setError(!error)
            setTimeout(()=> {return (setError(false))}, 2000)
        }else {return null}
    }
    
    return (
        <div className="issue">
            <>
                <h1>{ title }</h1>
                <h3>{ description }</h3>
            </>
            <>
                <p className="list-username">{ username }</p>
            </>
            {/* <p>Votes: </p> */}
            <div className="vote-container">
                <button className="likeBtn" onClick={()=> {return (handleUpvote(_id), displayUserErr(_id)) }}>👍🏼</button>
                <button className="dislikeBtn" onClick={() => {return (handleDownvote(_id), displayUserErr(_id)) }}>👎🏼</button>
            </div>
            <div>
            <button onClick={() => {setInputComments(!inputComments)}}>Add Comment</button>
            <>
            {error && userErr}
            </>
            <CommentsList
            comments = {comments} _id={_id} page ={page} deleteComment ={deleteComment}/>
            { addComment && <CommentsForm addComment = {addComment} _id={_id} setInputComments = {setInputComments}/>}
            </div>
        </div>
    )
} 