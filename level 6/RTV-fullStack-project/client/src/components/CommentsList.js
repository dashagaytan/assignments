import React from "react";
import Comments from "./Comments";

export default function CommentsList(props){
    const {comments, page, deleteComment, _id} = props

    return (
        <div className="comment-list">
            {Array.isArray(comments) && comments.length > 0 && <h2>Comments</h2>}

            {Array.isArray(comments) &&
            comments.map((comment) => (
                <Comments
                key={comment._id}
                {...comment}
                comments={comment.comments}
                deleteComment={deleteComment}
                page={page}
                />
            ))}
        </div>
    )
}