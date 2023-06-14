import React from "react";
import Comments from "./Comments";

export default function CommentsList(props){
    const {comments} = props
    return (
        <>
        {comments.map(comment => <Comments {...comment} key={comment._id}/>)}
        </>
    )
}