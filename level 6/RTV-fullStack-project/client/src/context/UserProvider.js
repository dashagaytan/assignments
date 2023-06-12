import React, {createContext, useState} from "react";
import axios from 'axios'

export const UserContext = React.createContext()

export default function UserProvider({children}){

    return (
        <UserContext.Provider>

            {children}
        </UserContext.Provider>
    )
}