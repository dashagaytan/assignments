import React from "react";
import Friend from "./Friend";
import data from "./data"

export default function FriendsList(){
    const friendArr = data.map(friend =>{
        return(
            <Friend
            key = {friend.id}
            {...friend}
            />
        )
    })
    return(
        <div>
            {friendArr}
        </div>
    )
}