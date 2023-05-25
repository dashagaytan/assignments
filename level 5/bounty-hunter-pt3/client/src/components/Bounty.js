import React, { useCallback, useState } from "react";
import AddBountyForm from "./AddBountyForm";
import "../components/bounty.css"

function Bounty(props){
    const {firstName, lastName, type, bounty, living, _id} = props
    //edit toggle state
    const [editToggle, setEditToggle] = useState(false)


    return (
        <div className="bounty">
            {!editToggle ?
                <>
                    <h2>Name: {firstName} {lastName}</h2>
                    <h2>Type: {type}</h2>
                    <h2>Bounty: {bounty}</h2>
                    <h2>Living: {living ? 'Yes' : 'No'} </h2>
                    <button onClick={()=> props.deleteBounty(_id)}>Delete</button>
                    <button onClick={()=> setEditToggle(prevState => !prevState)}>Edit</button>
                </>
                :
                <>
                    <AddBountyForm 
                        firstName={firstName}
                        lastName={lastName}
                        type={type}
                        bounty={bounty}
                        living={living}
                        _id={_id}
                        btnText= "Submit Edit"
                    />
                    <button onClick={()=> setEditToggle(prevState => !prevState)}>Close</button>
                </>
            }
        </div>
    )
}

export default Bounty;