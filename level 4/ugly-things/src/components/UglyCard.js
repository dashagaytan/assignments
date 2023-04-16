import React, {useContext, useState} from "react";
import { UglyContext } from "./UglyContext";
import axios from "axios";


function UglyCard(props){
    const {deleteUgly, uglyAPI,setUglyList} = useContext(UglyContext)

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

        const handleSubmitEdit = (id) =>{
            axios.put(`uglyAPI${id}`, editUgly)
                .then(() => {
                    axios.get(uglyAPI)
                    .then(res => setUglyList(res.data))
                    .catch(err => console.log(err))
                })
                .catch(err => console.log(err))
        }

    return(
        <div className="UglyCard">
            {editMode ?
                <form onSubmit={handleSubmitEdit}>
                     <img className="img" src={props.imgUrl} alt={props.description}/>
                     <br>
                </br>
                    <input
                    className="edit-input"
                    name = "title"
                    value = {editUgly.title}
                    onChange = {handleEditChange}
                     />
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
                    <h3 className="card-title">{props.title}</h3>
                    <img className="img" src={props.imgUrl} alt={props.description}/>
                    <h3 className="desc">{props.description}</h3>
                    <br>
                    </br>
                </div>
            }
            <br>
            </br>
            <button className="editBtn" onClick={toggleEditUgly}>{editMode ? "Close" : "Edit"}</button>
            <button className="delBtn" onClick={deleteUgly}>Delete</button>
        </div>
    )
}

export default UglyCard;