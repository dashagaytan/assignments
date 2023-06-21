import React, {useState, useContext} from "react";

export const IssueCommentProviderContext = React.createContext();

export default function IssueCommentProvider(){

    const initUserInput = {
        title: "",
        description: "",
        votes: 0,
        voters: []
    }

    const initComments = {
        comment: ""
        // issue: ""
    }
    const [comments, setComments] = useState(initComments)
    const [userInput, setUserInput] = useState(initUserInput)

    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        issues: [],
        errMsg: ""
    }

    return(
        <>
        </>
    )
}