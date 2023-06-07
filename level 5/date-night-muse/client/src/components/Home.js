import React from "react";
import { useNavigate } from "react-router-dom";
import "../style.css"

function Home(){
    const navigate = useNavigate()
    return(
        <div className="home">
                <h1>💖 Date Night Muse 💖</h1>
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