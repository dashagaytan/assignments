import React, { useState } from "react";

function AddBountyForm(props){
    const initInputs = {
        firstName: props.firstName || "",
        lastName: props.lastName || "",
        bounty: props.bounty || "",
        type: props.type || ""
    }

    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        const { name, value } = e.target;
        setInputs(prevState => ({...prevState, [name]: value}))
    }

    function handleSubmit(e){
        e.preventDefault();
        props.addBounty(inputs, props._id)
        setInputs(initInputs)
    }

    return(
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <input
                placeholder="First Name"
                type='text'
                name="firstName"
                value={inputs.firstName}
                onChange={handleChange}
                />
                <input
                placeholder="Last Name"
                type='text'
                name="lastName"
                value={inputs.lastName}
                onChange={handleChange}
                />
                <input
                placeholder="Bounty"
                type='text'
                name="bounty"
                value={inputs.bounty}
                onChange={handleChange}
                />
                 <input
                placeholder="Type"
                type='text'
                name="type"
                value={inputs.type}
                onChange={handleChange}
                />
                <button>{props.btnText}</button>
            </form>
        </div>
    )
}

export default AddBountyForm;