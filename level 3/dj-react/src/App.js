import React from 'react';
import Square from "./Square";
import Button from "./Button"

function App() {
  const [colors, setColors] = React.useState(["white", "white", "white", "white"])

    //small time dj: changes all 4 squres to ether white or black. 
  function smallDJ(){
    setColors(prevColors => {
      if(prevColors[0] === "white"){
        return ["black", "black", "black", "black"]
      } else{
        return ["white", "white", "white", "white"]
      }
    })
  }

    //party dj: handles the top half of btns to turn purple.
    function partyDJ(){
      setColors(prevColors => {
        return ["purple", "purple", prevColors[2], prevColors[3]]
      })
    }

    //professional dj: handles 2 btns that change the color to blue individualy 
    // first btn
    function firstPro(){
      setColors(prevColors => {
        return [prevColors[0], prevColors[1], "blue", prevColors[3]]
      })
    }
    // professinal dj: second btn 
    function secondPro(){
      setColors(prevColors => {
        return [prevColors[0], prevColors[1], prevColors[2], "blue"]
      })
    }

    // big time dj: 4 different btns that handle different effects

    function bigTime1(){

    }

    function bigTime2(){

    }

    function bigTime3(){

    }

    function bigTime4(){

    }

    const squares = colors.map((currentColor) => {
      return (
        <Square backgroundColor={currentColor}/>
      )
    }) 

  return (
    <div>
      <h2 className='title'>DJ REACT</h2>
    <div className="square-container">
      {squares}
    </div>

        <div className='btn-container'>
          <Button handleClick={smallDJ} buttonType="Small DJ"/>
          <Button handleClick={partyDJ} buttonType="Party DJ"/>

          <Button handleClick={firstPro} buttonType="Left Blue"/>
          <Button handleClick={secondPro} buttonType="Right Blue"/>
          <Button handleClick={bigTime1} buttonType="Rainbow"/>

          <Button handleClick={bigTime2} buttonType="Rainbow2"/>

          <Button handleClick={bigTime3} buttonType="Gradient"/>
          <Button handleClick={bigTime4} buttonType="Gradient2"/>

          

        </div>
    </div>
  );
}

export default App;
