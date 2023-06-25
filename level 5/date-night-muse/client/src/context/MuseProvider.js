import React, {useState, createContext, useEffect} from "react"
import axios from "axios"

const MuseContext = createContext();

export default function MuseProvider({children}){
    const [stayIn, setStayIn] = useState([])
    const [headOut, setHeadOut] = useState([])

    // get request: stay in date ideas
    function getStayInDates(){
        axios.get("/stayIn")
        .then((res) => {
            console.log(res.data, "stayIn")
            setStayIn(res.data)
        })
        .catch((err) => console.log(err.response.data.errMsg))
    }

    useEffect(()=> {
        getStayInDates();
    },[])

    // get request: head out date ideas
    function getHeadOutDates(){
        axios.get("/headOut")
        .then((res) => {
            console.log(res.data, "headOut")
            setHeadOut(res.data)
        })
        .catch((err) => console.log(err.response.data.errMsg))
    }

    useEffect(()=> {
        getHeadOutDates();
    },[])

    // filter date ideas by category
    function filterStayIn(e){
        if(e.target.value === "reset"){
            getStayInDates()
        } else {
            axios.get(`/stayIn/search/category?category=${e.target.value}`)
            .then(res => setStayIn(res.data))
            .catch(err => console.log(err))
        }
    }

    function filterHeadOut(e){
        if(e.target.value === "reset"){
            getHeadOutDates()
        } else {
            axios.get(`/headOut/search/category?category=${e.target.value}`)
            .then(res => setHeadOut(res.data))
            .catch(err => console.log(err))
        }
    }

    return(
        <MuseContext.Provider value={{
            getStayInDates,
            stayIn,
            filterStayIn,
            getHeadOutDates,
            headOut,
            filterHeadOut
        }}>       

        {children}

        </MuseContext.Provider>
    )
}

export {MuseProvider, MuseContext}