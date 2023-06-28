import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MuseContext } from "../context/MuseProvider";
import "../style.css"

function Home(){
    const navigate = useNavigate()
    const {user: {username}} = useContext(MuseContext)
    return(
        <div className="home">
                <h1>💖 Date Night Muse 💖</h1>
                <h1>@{username} 💖 Date Night Muse 💖 welcomes you</h1>
                <p>  Your ultimate companion for unforgettable date nights!<br></br>
                     Whether you prefer to stay in and create magical 
                     moments at home <br></br>
                    or venture out for thrilling adventures, <br></br>
                     our app is here to inspire and guide you every step of the way.</p>
                <hr></hr>
            <div className="home-btns">
                <h4>Date Night Made Effortless: Let the Muse Guide You</h4>
                <button onClick={()=> navigate("/stayIn")}> Stay In 🏡 </button>
                <button onClick={()=> navigate("/headOut")}> Head Out 🏔️ </button>
            </div>
        </div>
    )

}

export default Home;