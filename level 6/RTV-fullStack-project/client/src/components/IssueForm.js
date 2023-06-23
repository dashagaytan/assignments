import React, { useContext } from "react";
import {IssueContext} from "../context/IssueProvider.js"

export default function IssueForm(props){

    const { addIssue } = props  
    const { inputs, setInputs, initInputs } = useContext(IssueContext)


    function handleChange(e){
        const {name, value} = e.target
        setInputs(prev => ({
            ...prev,
            [name]:value
        }))
    }

    function handleSubmit(e){
        e.preventDefault();
        addIssue(inputs)
        setInputs(initInputs)
    }

    const { title, description } = inputs

    return (
        <form onSubmit={handleSubmit} className="issue-form">
            <input 
            type="text"
            name="title"
            placeholder="Issue Title"
            value={title}
            onChange={handleChange}
            />
            <input
            type="text"
            name="description"
            placeholder="Add Details"
            value={description}
            onChange={handleChange}
            />
            <button>Add Post</button>
        </form>
    )
}