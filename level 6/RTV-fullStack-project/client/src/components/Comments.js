import React from "react";


export default function Comments(props){
    const {comments, page, deleteComment, _id, username} = props

    function handleDelete(){
        if(page === "profile")
        return (
            <button onClick={()=> deleteComment(_id)}> Delete Comment</button>
        )
    }
    return (
        <div className="comments">
            <p>{username}</p>
            <p>{comments}</p>
            <>
            {handleDelete()}
            </>
        </div>
    )
}