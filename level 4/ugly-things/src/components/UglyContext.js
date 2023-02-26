import React, { useEffect, useState } from "react";
import axios from "axios";

//context hold axios requests as well as objects functions manipulations.
const UglyContext = React.createContext();

//form state 
function UglyThingsProvider(props){
    const [uglyArr, setUglyArr] = useState([])
    const [uglyThing, setUglyThing] = useState({
        title: '',
        desctiption: '',
        imgUrl: ''
    })

        useEffect(() => {
            axios.get("https://api.vschool.io/dashagaytan/thing")
            .then(res => setUglyArr(res.data))
            .catch(err => console.log(err))
        }, []);
    
        //submits form on click Submit
        function addUglyThing(event){
            axios.post("https://api.vschool.io/dashagaytan/thing/" , uglyThing)
            .then(res => setUglyArr(
                [...uglyArr,
                res.data]
            )
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

        //delete image from list
        function handleDelete(id){
            axios.delete(`https://api.vschool.io/dashagaytan/thing/${id}`)
            .then(setUglyArr(uglyArr.filter((index) => index._id !== id)))
        }

    return (
        <UglyContext.Provider value ={{
            uglyThing:
             uglyThing,
             handleChange, 
             addUglyThing,
             handleDelete
             }}>
            {props.children}
        </UglyContext.Provider>
    )

}

export {UglyThingsProvider, UglyContext}