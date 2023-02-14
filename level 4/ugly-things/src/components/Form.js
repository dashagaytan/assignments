//input form: title, image, description of the ugly thing

import React,{useContext} from "react";
import { UglyContext } from "./UglyContext";
import Footer from "./Footer"

function Form(props){
    const {uglyThing, handleChange, handleSubmit} = useContext(UglyContext)

    return(
       <div className="form-card">
         <form onSubmit={handleSubmit}>
           <input
           input='text'
           name="title"
           placeholder="Title"
           value={uglyThing.title}
           onChange={handleChange}
           />
           <input
           input='text'
           name="imgUrl"
           placeholder="Image Url"
           value={uglyThing.imgUrl}
           onChange={handleChange}
           />
           <input
           input='text'
           name="desctiption"
           placeholder="description"
           value={uglyThing.description}
           onChange={handleChange}
           />
           <button>Submit</button>

           <Footer />

         </form>
       </div>
    )
}

export default Form;