import React, {useContext, useState} from "react";
import { UglyContext } from "./UglyContext";


function UglyCard(props){
    const {deleteUgly} = useContext(UglyContext)

    const [editMode, setEditMode]=useState(false)
    const [editUgly, setEditUgly] = useState({
        title: props.title || "title", 
        description: props.description ||"description"})

    
        const toggleEditUgly = () => {
            console.log("edit toggle ran")
            setEditMode(prevState=> !prevState)
        }
    
        const handleEditChange = (event) => {
            const {name, value} = event.target;
            setEditUgly(prevState => {
                return{
                    ...prevState,
                    [name]:value
                }
            })
        }

        const handleSubmitEdit = (e) =>{
            e.preventDefault()
            
        }

    return(
        <div className="UglyCard">
            {editMode ?
                <form onSubmit={handleSubmitEdit}>
                    <input
                    className="edit-input"
                    name = "title"
                    value = {editUgly.title}
                    onChange = {handleEditChange}
                     />
                     <img className="img" src={props.imgUrl} alt={props.description}/>
                    <input
                    className="edit-input"
                    name = "description"
                    value = {editUgly.description}
                    onChange = {handleEditChange}
                     />
                    <button className="sub-edit">Submit</button>
                </form>
                :
                <div>
                    {/* <h1> My Uglies: </h1> */}
                    <h3 className="title">{props.title}</h3>
                    <img className="img" src={props.imgUrl} alt={props.description}/>
                    <h5 className="desc">{props.description}</h5>
                </div>
            }
            <button className="editBtn" onClick={toggleEditUgly}>{editMode ? "Close" : "Edit"}</button>
            <button className="delBtn" onClick={deleteUgly}>Delete</button>
        </div>
    )
}

export default UglyCard;