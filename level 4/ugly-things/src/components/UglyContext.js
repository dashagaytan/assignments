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
    
    const [uglyArr, setUglyArr] = useState([])

    
    //submits form on click Submit
    function handleSubmit(event){
        axios.post("https://api.vschool.io/dashagaytan/thing/" , uglyThing)
        .then(res => res.data)
        .catch(err => console.log(err))
    }
    
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
        .them(res => setUglyThing(res.data))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getUglyThings()
    }, [])
    
    useEffect(() => {
        axios.get("https://api.vschool.io/dashagaytan/thing")
        .then(res => setUglyArr(res.data))
        .catch(err => console.log(err))
    }, []);
    // console.log(uglyArr)


    //delete image from list
        function handleDelete(index){
            let id = uglyArr[index]._id
            axios.delete(`https://api.vschool.io/dashagaytan/thing/${id}`)
            .then(setUglyArr(uglyArr.filter((index) => index._id !== id)))
        }

        //edit the image that's already added to the list
        function handleEdit(){
            axios.put("")
        }

    return (
        <UglyContext.Provider value ={{
            uglyThing:
             uglyThing,
             handleChange, 
             handleSubmit,
             handleDelete,
             handleEdit
             }}>
            {props.children}
        </UglyContext.Provider>
    )

}

export {UglyThingsProvider, UglyContext}