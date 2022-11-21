import React from "react";

function Form(){
    const [uesrBadge, setUserBadge] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        placeOfBirth: "",
        phone: "",
        favoriteFood: "",
        about: ""
    })

    function handleChange(event){
        const {name, value, type} = event.target
        setUserBadge(prevState => {
            return {
                ...prevState, 
                [name]: type.value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault()
    }

    return(
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder="First name"
                name="firstName"
                value={uesrBadge.firstName}
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