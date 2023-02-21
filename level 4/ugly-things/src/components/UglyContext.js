import React, { useEffect, useState } from "react";
import axios from "axios";

//context hold axios requests as well as objects functions manipulations.
const UglyContext = React.createContext();

//form state 
function UglyThingsProvider(props){
    const [uglyThing, setUglyThing] = useState({
        title: '',
        desctiption: '',
        imgUrl: ''
    })
    
        //submits form on click Submit
        function handleSubmit(event){
            axios.post("https://api.vschool.io/dashagaytan/thing/" , uglyThing)
            .then(res => res)
            .catch(err => console.log(err))
        }
    
        //array of new images posted
        const [uglyArr, setUglyArr] = useState([])
        
        useEffect(() => {
            axios.get("https://api.vschool.io/dashagaytan/thing")
            .then(res => setUglyArr(res.data.uglyThing))
            .catch(err => console.log(err))
        }, []);
    
        //handles user input
        function handleChange(event){
            const {name, value} = event.target
            setUglyThing(prevState => ({
                ...prevState, 
                [name]: value
            }))
            // console.log(uglyThing)
        }

        //delete image from list
        function handleDelete(id){
            axios.delete(`https://api.vschool.io/dashagaytan/thing/${id}`)
            .then(setUglyArr(uglyArr.filter((index) => index._id !== id)))
        }


    return (
        <UglyContext.Provider value ={{
            uglyThing: uglyThing,
             handleChange, 
             handleSubmit,
             handleDelete
             }}>
            {props.children}
        </UglyContext.Provider>
    )

}

export {UglyThingsProvider, UglyContext}