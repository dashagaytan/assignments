import React from "react";
import Comments from "./Comments";

export default function CommentsList(props){
    const {comments, page, deleteComment, _id} = props

    return (
        <div className="comment-list">
            { comments.length >= 1 && <h2>Comments</h2>}

            { comments.map((comment) => (
                <Comments
                    key={_id}
                    {...comment}
                    comments = {comments._id}
                    deleteComment={deleteComment}
                    page={page}
                />
            ))}
        </div>
    )
}