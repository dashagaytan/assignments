import React, { useContext } from "react";
import {UglyContext} from "./UglyContext"

function Form(){

const {handleChange, handleSubmit, uglyData} = useContext(UglyContext)

    return(
<div>
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