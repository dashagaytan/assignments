
import React from "react";
import Button from "./Button";
import DiceBox from "./DiceBox"

function App() {
  const [numbers, setNumbers] = React.useState([0, 0, 0, 0, 0])

     function showRandomNum(){
      
    }

    return(
        <div className="main-container">
          <h2 className="title">React Dice</h2>
        <div className="dies-container">
            {}
        </div>
          <div>
              <Button handleClick={showRandomNum}/>
          </div>
        </div>
    )
}

export default App;
