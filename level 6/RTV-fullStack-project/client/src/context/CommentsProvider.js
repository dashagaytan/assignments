import React, {useState} from "react";
import axios from 'axios'

export const CommentsContext = React.createContext()

export default function CommentsProvider(props){

    return (
        <CommentsContext.Provider value ={{}}>

            {props.children}
        </CommentsContext.Provider>
    )
}