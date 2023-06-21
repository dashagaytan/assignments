import React from "react";
import Comments from "./Comments";

export default function CommentsList(props){
    const {comments, page, deleteComment} = props

    return (
        <div className="comment-list">
            {comments.map(comment =>
                <Comments
                    key={comment._id}
                    {...comments}
                    deleteComment={deleteComment}
                    page={page}
                />
            )}
        </div>
    )
}