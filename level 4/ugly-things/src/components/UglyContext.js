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

    //handles user input
    function handleChange(event){
        const {name, value} = event.target
        setUglyThing(prevState => ({
            ...prevState, 
            [name]: value
        }))
    }

    function getUglyThings(){
        axios.get("https://api.vschool.io/dashagaytan/thing")
        .then(res => setUglyThing(res.data))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        console.log(UglyContext)
        return getUglyThings();
    }, []);

    //post user input to the list of ugly things on submit
    function addUglyThing (event){
        event.preventDefaoult()
        axios.post("https://api.vschool.io/dashagaytan/thing", uglyThing)
        .then(res => getUglyThings())
        .catch(err => console.log(err))
    }

    return (
        <UglyContext.Provider value ={{
            uglyThing: uglyThing,
             handleChange: handleChange, 
             addUglyThing: addUglyThing
             }}>
            {props.children}
        </UglyContext.Provider>
    )

}

export {UglyThingsProvider, UglyContext}