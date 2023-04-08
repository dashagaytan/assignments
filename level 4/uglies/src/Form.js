import React, { useContext } from "react";
import {UglyContext} from "./UglyContext"

function Form(props){

const {handleChange, handleSubmit, uglyData} = useContext(UglyContext)

    return(
<div>
        <h1 className="main-title">Ugly Things</h1>

        <div className="main-form">
        <form onSubmit={handleSubmit}>
            <input 
            className="form-input"
            name = "title"
            value = {uglyData.title}
            placeholder="Title"
            onChange = {handleChange}
            />
            <input 
            className="form-input"
            name = "imgUrl"
            value = {uglyData.imgUrl}
            placeholder="Image Url"
            onChange = {handleChange}
            />
            <input 
             className="form-input"
            name = "description"
            value = {uglyData.description}
            placeholder="Description"
            onChange = {handleChange}
            />
            <button className="form-btn">Add Ugly Thing</button>
        </form>
        </div>

</div>
    )
}

export default Form;