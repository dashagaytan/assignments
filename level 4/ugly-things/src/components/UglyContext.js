import React, { useEffect, useState } from "react";
import axios from "axios";

//context hold axios requests as well as objects functions manipulations.
const UglyContext = React.createContext();

//form state 
function UglyThingsProvider(props){
    
    const [uglyArray, setUglyArray] = useState([])
    
    const [uglyThing, setUglyThing] = useState({
        title: "",
        description: "",
        imgUrl: ""
    })
        
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
        axios.get("https://api.vschool.io/dashagaytan/thing")
        .then(res =>{
            console.log(res.data)
             setUglyArray((res.data))
        })  
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getUglyThings() 
    }, [])

        //submits form on click Submit
        function handleSubmit(event){
            event.preventDefault()
            // const getNewUgly = {...uglyThing}
            // setUglyThing(() => ({
            //     title: "",
            //     description: "",
            //     imgUrl: ""
            // }))
                axios.post("https://api.vschool.io/dashagaytan/thing/" , uglyThing)
                .then(() => getUglyThings())
                .catch(err => console.log(err))
            }
    
    
        function handleDelete(id){
            axios.delete(`https://api.vschool.io/dashagaytan/thing/${id}`)
            .then(()=> getUglyThings())
            .catch(err => console.log(err))
        }

    return (
        <UglyContext.Provider value ={{
             uglyThing,
             uglyArray,
             handleDelete,
             getUglyThings,
             handleChange, 
             handleSubmit,
             }}>
            {props.children}
        </UglyContext.Provider>
    )

}

export {UglyThingsProvider, UglyContext}