import React, { useContext, useState} from "react";
import {MuseContext} from "../MuseContext"
import {useNavigate} from "react-router-dom"

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
        <>
        <h2>Head Out Date Muse</h2>
        <h4>Let the Muse guide you: </h4>
        <button onClick={()=> navigate("/")}>Home Page</button>
        <br>
        </br>
        <select onChange={filterHeadOut} className="filter-form">
                <option value="reset">- Lets Head Out-</option>
                <option value="restaurants">Restaurant</option>
                <option value="adventure">Adventures</option>
            </select>
        <br>
        </br>
        <button onClick={handleHeadOutMuse}>See all Adventure Dates</button>
        <br>
        </br>
        {showHeadOut && (
      <>
            <h2>Head Out Dates:</h2>
            {headOut.map((item) => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <p>{item.category}</p>
                </div>
            ))}
        </>
         )}
            
            <button onClick={()=> navigate("/")}>Home Page</button>
        </>
    )
}

export default HeadOut;