import React, {useState, useEffect} from "react";
import axios from "axios"

const UglyContext = React.createContext();

function UglyProvider(props){
   
    //states: 
    const [uglyList, setUglyList] = useState([])
    const [uglyData, setUglyData] = useState({
        title: "",
        imgUrl: "",
        description: ""
    })

        //functions: 
    const getUgly = () =>{
        axios.get("https://api.vschool.io/dashagaytan/thing")
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
        axios.post("https://api.vschool.io/dashagaytan/thing", uglyData)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    //delete function 
    const deleteUgly = (id) =>{
        axios.delete(`https://api.vschool.io/dashagaytan/thing/${id}`)
            .then(() => getUgly())
            .catch(err => console.log(err));
        } 
    

return(
    <UglyContext.Provider value={{
        uglyData,
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