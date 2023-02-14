//input form: title, image, description of the ugly thing

import React,{useContext} from "react";
import { UglyContext } from "./UglyContext";
import Footer from "./Footer"

function Form(props){
    const {uglyForm, handleChange, handleSubmit} = useContext(UglyContext)

    return(
       <div className="form-card">
         <form onSubmit={handleSubmit}>
           <input
           input='text'
           name="title"
           placeholder="Title"
           value={uglyForm.title}
           onChange={handleChange}
           />
           <input
           input='text'
           name="imgUrl"
           placeholder="Image Url"
           value={uglyForm.imgUrl}
           onChange={handleChange}
           />
           <input
           input='text'
           name="desctiption"
           placeholder="description"
           value={uglyForm.description}
           onChange={handleChange}
           />
           <button>Submit</button>

           <Footer />

         </form>
       </div>
    )
}

export default Form;