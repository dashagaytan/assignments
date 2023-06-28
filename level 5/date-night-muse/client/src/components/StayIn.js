import React, { useContext, useState} from "react";
import {MuseContext} from "../context/MuseProvider.js"
import {useNavigate} from "react-router-dom"
import "../style.css"

function StayIn(props){
    const {stayIn, filterStayIn, getStayInDates} = useContext(MuseContext);
    const navigate = useNavigate();
    //console.log(stayIn, "Stay In ")
    const [showStayIn, setShowStayIn] = useState(false)

    function handleStayInMuse(){
        getStayInDates();
        // setShowStayIn(false)
        setShowStayIn(prevState => !prevState)
    }

    return(
        <div className="stayIn">
            <h2 style={{fontSize: "24px", marginBottom: "10px"}}>Stay In Date Muse</h2>
            <h4 style={{fontSize: "16px", marginBottom: "10px"}}>Let the Muse guide you: </h4>
            <br>
            </br>
            <select style={{padding: "10px", fontSize: "16px", marginBottom: "10px"}} onChange={filterStayIn} className="filter-form">
                    <option value="reset">- Stay In Dates-</option>
                    <option value="movie">Movies</option>
                    <option value="cook">Lets Cook</option>
            </select>
            <br>
            </br>
            <button onClick={handleStayInMuse}>See all Stay In Dates</button> 
            {/* <button onClick={()=> navigate("/")}>⬅</button> */}
            <br>
            </br>
                {showStayIn && (
             <>
                    <h2>Stay In Dates:</h2>
                    <div className="stayIn-grid">
                        {stayIn.map((item) => (
                            <div key={item.id} className="stayIn-item" >
                                {console.log(item, "item")}
                                <h3 style={{fontSize: "18px", marginBottom: "5px"}}>{item.title}</h3>
                                <p style={{fontSixe: "14px", color: "#261231"}}>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </>
                )}
        </div>
    )
}

export default StayIn;