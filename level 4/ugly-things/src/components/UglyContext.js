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
        const newUnglyThing = {
            ...uglyThing}
            setUglyThing(()=> ({
                title: "",
                descritption: "",
                imgUrl: ""
            }))
            axios.post("https://api.vschool.io/dashagaytan/thing/" , newUnglyThing)
            .then(() => getUglyThings())
            .catch(err => console.log(err))
        }
    
        function handleDelete(index){
            let id = uglyArray[index]._id
            axios.delete(`https://api.vschool.io/dashagaytan/thing/${id}`)
            .then(setUglyArray(uglyArray.filter((index) => index._id !== id)))
        }

        function handleEdit(){
            axios.put("")
        }

        function handleSave(){
            
        }

    return (
        <UglyContext.Provider value ={{
             uglyThing,
             uglyArray,
             handleEdit,
             handleDelete,
             handleSave,
             getUglyThings,
             handleChange, 
             handleSubmit,
            //  handleDelete,
            //  handleEdit
             }}>
            {props.children}
        </UglyContext.Provider>
    )

}

export {UglyThingsProvider, UglyContext}