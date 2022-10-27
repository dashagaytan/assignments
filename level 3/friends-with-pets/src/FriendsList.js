import React from "react";
import Friend from "./Friend";
import friendsData from "./friendsData"
import style from "./style.css"

export default function FriendsList(){
    const data = friendsData.map(friend =>{
        return(
            <Friend
            key = {friend.id}
            {...friend}
            />
        )
    })
    return(
        <div>
            {data}
        </div>
    )
}