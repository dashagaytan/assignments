import React, { useEffect, useState } from "react";
import axios from "axios";

//context hold axios requests as well as objects functions manipulations.
const UglyContext = React.createContext();

//form state 
function UglyThingProvider(props){
    const [uglyForm, setUglyForm] = useState({
        title: '',
        desctiption: '',
        imgUrl: ''
    })

    //handles user input
    function handleChange(event){
        const {name, value} = event.target
        setUglyForm(prevState => ({
            ...prevState, 
            [name]: value
        }))
    }

    function getUglyThings(){
        axios.get("https://api.vschool.io/dashagaytan/thing")
        .then(res => {
            setUglyForm(() => (res.data))
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        return getUglyThings();
    }, []);

    //post user input to the list of ugly things on submit
    function handleSubmit(event){
        event.preventDefaoult()
        axios.post("https://api.vschool.io/dashagaytan/thing", uglyForm)
        .then(res => {
            console.log(res.data) 
            return getUglyThings()
        })
        .catch(err => console.log(err))
    }

    return (
        <UglyContext.Provider value ={{
            uglyForm,
            handleChange,
            handleSubmit
        }}>
            {props.children}
        </UglyContext.Provider>
    )

}

export {UglyThingProvider, UglyContext}