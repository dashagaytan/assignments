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
        console.log("delete request sent");
        axios.delete(`uglyAPI${id}`)
            .then(()=>{
                axios.get(uglyAPI)
                .then(res => setUglyList(res.data))
            })
        } 
    

return(
    <UglyContext.Provider value={{
        uglyData,
        uglyAPI,
        handleChange,
        uglyList,
        setUglyList,
        handleSubmit,
        deleteUgly
    }}>
        {props.children}
    </UglyContext.Provider>
)
}

export {UglyProvider, UglyContext};