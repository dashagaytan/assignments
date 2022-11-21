import React from "react";

function Form(){
    const [badge, setBadge] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        placeOfBirth: "",
        phone: "",
        favoriteFood: "",
        about: ""
    })

    function handleChange(){

    }

    function handleSubmit(){

    }

    return(
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <input 
                onChange={handleChange}
                />

                <input 
                onChange={handleChange}
                />

                <input 
                onChange={handleChange}
                />

                <input 
                onChange={handleChange}
                />

                <input 
                onChange={handleChange}
                />

                <input
                onChange={handleChange}
                /> 

                <input 
                onChange={handleChange}
                /> {/*textbox*/}
                
            </form>
            <button>Submit</button>
        </div>
    )
}

export default Form;