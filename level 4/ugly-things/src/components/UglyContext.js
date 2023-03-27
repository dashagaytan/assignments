import React, { useEffect, useState } from "react";
import axios from "axios";

//context hold axios requests as well as objects functions manipulations.
const UglyContext = React.createContext();

//form state 
function UglyThingsProvider(props){
    
    const [uglyThing, setUglyThing] = useState({
        title: "",
        imgUrl: "",
        description: ""
    })
    
    const [uglyArray, setUglyArray] = useState([])
        
    //handles the change of state 
    function handleChange(event){
        const {name, value} = event.target
        setUglyThing(prevState => ({
            ...prevState, 
            [name]: value
        }))
        // console.log(uglyThing)
    }

    //function that adds things to an array of uglies
    function addUgly(){
        setUglyArray(prevState => {
            return (
                [...prevState,
                uglyThing]
             )
        })
    }

    //onClick form will handle Submit function to post a new ugly thing to an API
    function handleSubmit(e){
        e.preventDefault()
        addUgly()
        axios.post("https://api.vschool.io/dashagaytan/thing", uglyThing)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }
    
    //DELETE request to delete an existing thing from the list
    function handleDelete(id){
        axios.delete(`https://api.vschool.io/dashagaytan/thing/${id}`)
        .then(res => getUglyThings())
        .catch(err => console.log(err))
        }

    //GET request to an API 
    function getUglyThings(){
        axios.get("https://api.vschool.io/dashagaytan/thing")
        .then(res =>{
             setUglyArray(res.data)
        })  
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getUglyThings() 
    }, [])

    //PUT request to edit an existing image title and description 
    function handleEdit(id, editUgly){
        axios.put(`https://api.vschool.io/dashagaytan/thing/${id}`, editUgly)
        .then((res) => console.log(res.data))
        .then(() => getUglyThings())
            .catch(err => console.log(err))
    }

    function handleEditChange(event){
        const {name, value} = event.target
        setEditOption(true)
        setEditData(prevState => {
            return{
                ...prevState,
                [name]: value
            }
        })
    }


    return (
        <UglyContext.Provider value ={{
            uglyThing,
            uglyArray,
            handleChange,
            handleSubmit,
            handleDelete,
            handleEdit,
            handleEditChange

             }}>
            {props.children}
        </UglyContext.Provider>
    )

}

export {UglyThingsProvider, UglyContext}