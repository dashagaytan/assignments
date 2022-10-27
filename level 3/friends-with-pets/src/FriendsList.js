import React from "react";
import friends from "./data"
import Friend from "./Friend";

export default function FriendsList(){
    const friendsArr = friends.map(friend =>{
        return(
            <Friend
                {...friend}
            />
        )
    })
    return(
        <div>
            {friendsArr}
        </div>
    )
}