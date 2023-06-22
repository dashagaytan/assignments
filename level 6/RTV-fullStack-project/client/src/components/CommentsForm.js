import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";

export default function CommentsForm(props){

const {_id, setInputComments} = props
const { addComment } = useContext(UserContext);
const [inputs, setInputs] = useState({comment: ""})

function handleChange(e){
    const {name, value} = e.target
    setInputs(prevState=> ({
        ...prevState,
        [name]: value
    }))
}

function handleSubmit(e){
    e.preventDefault();
    setInputComments(false)
    addComment(inputs, _id)
    setInputs({comment: ""})
}

    return(
        <form onSubmit={handleSubmit} className="comment-form">
            <textarea
                type="text"
                name="comment"
                value={inputs.comment}
                onChange={handleChange}
                placeholder = "Leave a comment..."
                />
            <button>Post Comment</button>
        </form>
    )
}