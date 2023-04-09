import React, {useState, useEffect} from "react";
import axios from "axios"

const UglyContext = React.createContext();

function UglyProvider(props){
    const uglyAPI = "https://api.vschool.io/dashagaytan/thing"
   
    //states: 
    const [uglyList, setUglyList] = useState([])
    const [uglyData, setUglyData] = useState({
        title: "",
        imgUrl: "",
        description: ""
    })

        //functions: 
    const getUgly = () =>{
        axios.get(uglyAPI)
        .then(res => {
            setUglyList(res.data)
        })
        .catch(err=> console.log(err))
    }
    useEffect(() => {
        console.log("useEffect ran")
        getUgly();
    }, [])


    const handleChange = (e) =>{
        const {name, value} = e.target
        setUglyData(prevState => {
            return {
                ...prevState,
                [name]:value
            }
        })
    }

    //addUgly function on submit
    const addUgly = () =>{
        console.log("addUgly function ran")
        setUglyList(prevState => {
            return [...prevState, uglyData]
        })
        setUglyData({
            title: "",
            imgUrl: "",
            description: ""
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addUgly();
        axios.post(uglyAPI, uglyData)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    //delete function 
    const deleteUgly = (id) =>{
        console.log("delete function ran")
        axios.delete(`uglyAPI${id}`)
        .then(()=> getUgly())
        .catch(err=> console.log(err))
    }


return(
    <UglyContext.Provider value={{
        uglyData,
        handleChange,
        uglyList,
        handleSubmit,
        deleteUgly
    }}>
        {props.children}
    </UglyContext.Provider>
)
}

export {UglyProvider, UglyContext};

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// //context hold axios requests as well as objects functions manipulations.
// const UglyContext = React.createContext();

// //form state 
// function UglyThingsProvider(props){
    
//     //initial state
//     const [uglyThing, setUglyThing] = useState({
//         title: "",
//         imgUrl: "",
//         description: ""
//     })
    
//     //array that will keep all submitted items 
//     const [uglyArray, setUglyArray] = useState([])
        
//     //handles the change of state 
//     function handleChange(event){
//         const {name, value} = event.target
//         setUglyThing(prevState => ({
//             ...prevState, 
//             [name]: value
//         }))
//         // console.log(uglyThing)
//     }

//     //function that adds things to an array of uglies
//     function addUgly(){
//         setUglyArray(prevState => {
//             return (
//                 [...prevState,
//                 uglyThing]
//              )
//         })
//     }

//     //onClick form will handle Submit function to post a new ugly thing to an API
//     function handleSubmit(e){
//         e.preventDefault()
//         addUgly()
//         axios.post("https://api.vschool.io/dashagaytan/thing", uglyThing)
//             .then(res => console.log(res.data))
//             .catch(err => console.log(err))
//     }
    
//     //DELETE request to delete an existing thing from the list
//     // function handleDelete(id){
//     //     axios.delete(`https://api.vschool.io/dashagaytan/thing/${id}`)
//     //     .then(res => getUglyThings())
//     //     .catch(err => console.log(err))
//     //     }

//     //GET request to an API 
//     function getUglyThings(){
//         axios.get("https://api.vschool.io/dashagaytan/thing")
//         .then(res =>{
//              setUglyArray(res.data)
//         })  
//         .catch(err => console.log(err))
//     }

//     useEffect(() => {
//         getUglyThings() 
//     }, [])

//     //PUT request to edit an existing image title and description 
//     // function handleEdit(id, editUgly){
//     //     axios.put(`https://api.vschool.io/dashagaytan/thing/${id}`, editUgly)
//     //     .then((res) => console.log(res.data))
//     //     .then(() => getUglyThings())
//     //         .catch(err => console.log(err))
//     // }

//     return (
//         <UglyContext.Provider value ={{
//             uglyThing,
//             uglyArray,
//             handleChange,
//             handleSubmit,
//             // handleDelete,
//             // handleEdit,
//              }}>
//             {props.children}
//         </UglyContext.Provider>
//     )

// }

// export {UglyThingsProvider, UglyContext}