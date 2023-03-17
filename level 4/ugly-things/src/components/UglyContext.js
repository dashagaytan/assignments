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
        
    //handles user input
    function handleChange(event){
        const {name, value} = event.target
        setUglyThing(prevState => ({
            ...prevState, 
            [name]: value
        }))
        // console.log(uglyThing)
    }

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

    function addUgly(){
        axios.post("https://api.vschool.io/dashagaytan/thing", uglyThing)
        .then(() => getUglyThings())
        .catch(err => console.log(err))
    }

    function handleSubmit(e){
        e.preventDefault()
        addUgly(uglyThing)
        setUglyThing(()=> ({
            title: "",
            description: "",
            imgUrl: ""
        }))
    }

    return (
        <UglyContext.Provider value ={{
             uglyThing,
             uglyArray,
             getUglyThings,
             addUgly,
             handleChange, 
             handleSubmit
             }}>
            {props.children}
        </UglyContext.Provider>
    )

}

export {UglyThingsProvider, UglyContext}