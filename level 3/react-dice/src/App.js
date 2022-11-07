
import React from "react";
import Button from "./Button";
import DiceBox from "./DiceBox"

function App() {
  const [numbers, setNumbers] = React.useState([0, 0, 0, 0, 0])

    function rollRandomNum(){
        setNumbers([
          Math.floor(Math.random()* 6)
        ])
    }
    //map through each number in the array
    const numberArray = numbers.map(num => <DiceBox randomNumber = {num} />)

    return(
        <div className="main-container">
          <h2 className="title">React Dice</h2>
        <div className="dies-container">
            {numberArray}
        </div>
          <div>
              <Button handleClick={rollRandomNum}/>
          </div>
        </div>
    )
}

export default App;
