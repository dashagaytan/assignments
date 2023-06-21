import React, { useState } from "react";
import { UserContext } from "../context/UserProvider";

export default function CommentsForm(props){

const {_id, setComments} = props
const { addComment } = {UserContext}
const [inputs, setInputs] = useState({comment: " "})

function handleChange(e){
    const {name, value} = e.target
    setInputs(prevState=> ({
        ...prevState,
        [name]: value
    }))
}

function handleSubmit(e){
    e.preventDefault();
    setComments(false)
    addComment(_id, inputs)
}

    return(
        <form onSubmit={handleSubmit}>
            <textarea
                type="text"
                name="comment"
                value={inputs.comment}
                onChange={handleChange}
                placeholder = "Leave a comment..."/>
            <button>Post Comment</button>
        </form>
    )
}