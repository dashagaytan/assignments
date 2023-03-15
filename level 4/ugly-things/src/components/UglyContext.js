import React, { useEffect, useState } from "react";
import axios from "axios";

//context hold axios requests as well as objects functions manipulations.
const UglyContext = React.createContext();

//form state 
function UglyThingsProvider(props){
    
    const [uglyThing, setUglyThing] = useState({
        title: "",
        description: "",
        imgUrl: ""
    })
    const [uglyArray, setUglyArray] = useState([])
    const [editOption, setEditOption] = useState(false)
    const [editUgly, setEditUgly] = useState({title: "", description: ""})
    
    // const [uglyArr, setUglyArr] = useState([])
        
    //handles user input
    function handleChange(event){
        const {name, value} = event.target
        setUglyThing(prevState => ({
            ...prevState, 
            [name]: value
        }))
        // console.log(uglyThing)
    }

    //get images from and API and set useEffect on first render
    function getUglyThings(){
        fetch("https://api.vschool.io/dashagaytan/thing")
        .then(res => res.json())
        .then(data => {
            setUglyArray(() => [...data])
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getUglyThings()
    }, [])

    //submits form on click Submit
    function handleSubmit(event){
        event.preventDefault()
        const getNewUgly = {...uglyThing}
        setUglyThing(() => ({
            title: "",
            description: "",
            imgUrl: ""
        }))
            axios.post("https://api.vschool.io/dashagaytan/thing/" , getNewUgly)
            .then(() => getUglyThings())
            .catch(err => console.log(err))
        }
    
        function handleDelete(id){
            axios.delete(`https://api.vschool.io/dashagaytan/thing/${id}`)
            .then(()=> getUglyThings())
            .catch(err => console.log(err))
        }

        //watches for changes on edit
        function handleEditChange(event){
            const {name, value} = event.target
            setEditUgly( prevState => ({
                ...prevState,
                [name]: value
            }))
        }

        //edit option to change title and description of an image in the list
        function handleEdit(id, ugly){
            console.log(id, ugly)
            axios.put("")
        }

        //saves the edited changes of an existing image
        function handleSave(){
            
        }

    return (
        <UglyContext.Provider value ={{
             uglyThing,
             uglyArray,
             editOption,
             editUgly,
             handleEdit,
             handleDelete,
             handleSave,
             getUglyThings,
             handleChange, 
             handleSubmit,
             handleEditChange
             }}>
            {props.children}
        </UglyContext.Provider>
    )

}

export {UglyThingsProvider, UglyContext}