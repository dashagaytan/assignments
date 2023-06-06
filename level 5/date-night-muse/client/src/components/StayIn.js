import React, { useContext, useState} from "react";
import {MuseContext} from "../MuseContext"
import {useNavigate} from "react-router-dom"

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
        <div>
        <h2>Stay In Date Muse</h2>
        <h4>Let the Muse guide you: </h4>
        <button onClick={()=> navigate("/")}>Home Page</button>
        <br>
        </br>
        <select onChange={filterStayIn} className="filter-form">
                <option value="reset">- Stay In Dates-</option>
                <option value="movie">Movies</option>
                <option value="cook">Lets Cook</option>
            </select>
        <br>
        </br>
        <button onClick={handleStayInMuse}>See all Stay In Dates</button>
        <br>
        </br>
        {showStayIn && (
      <>
            <h2>Stay In Dates:</h2>
            {console.log(stayIn, "stayIn test")}
            {stayIn.map((item) => (
                <div key={item.id}>
                    {console.log(item, "item")}
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </div>
            ))}
        </>
         )}
        </div>
    )
}

export default StayIn;