import React, { useContext, useState} from "react";
import {MuseContext} from "../context/MuseProvider.js"
import {useNavigate} from "react-router-dom"
import "../style.css"

function HeadOut(props){
    const {headOut, filterHeadOut, getHeadOutDates} = useContext(MuseContext);
    const navigate = useNavigate();

    const [showHeadOut, setHeadOut] = useState(false)

    function handleHeadOutMuse(){
        getHeadOutDates();
        // setHeadOut(false)
        setHeadOut(prevState => !prevState)
    }

    return(
        <div className="headOut">
        <h2 style={{fontSize: "24px", marginBottom: "10px"}}>Head Out Date Muse</h2>
        <h4 style={{fontSize: "16px", marginBottom: "10px"}}>Let the Muse guide you: </h4>
        <br>
        </br>
        <select style={{padding: "10px", fontSize: "16px", marginBottom: "10px"}} onChange={filterHeadOut} className="filter-form">
                <option value="reset">- Lets Head Out-</option>
                <option value="restaurants">Restaurant</option>
                <option value="adventure">Adventures</option>
            </select>
        <br>
        </br>
        <button onClick={handleHeadOutMuse}>See all Adventure Dates</button>
        {/* <button onClick={()=> navigate("/home")}>⬅</button> */}
        <br>
        </br>
        {showHeadOut && (
      <>
            <h2>Head Out Dates:</h2>
            <div className="headOut-grid">
            {headOut.map((item) => (
                <div key={item.id} className="headOut-item">
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

export default HeadOut;