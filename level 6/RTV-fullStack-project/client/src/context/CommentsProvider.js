import React, {useState} from "react";
import axios from 'axios'

export const CommentsContext = React.createContext()

export default function CommentsProvider({children}){

    return (
        <CommentsContext.Provider>

            {children}
        </CommentsContext.Provider>
    )
}