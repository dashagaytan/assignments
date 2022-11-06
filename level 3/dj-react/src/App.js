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
      setColors(prevColors => {
        return [prevColors[0], prevColors[1], "linear-gradient(-225deg, #FF057C 0%, #7C64D5 48%, #4CC3FF 100%)", "linear-gradient(109.6deg, rgb(9, 9, 121) 11.2%, rgb(144, 6, 161) 53.7%, rgb(0, 212, 255) 100.2%)"]
      })
    }

    function bigTime2(){
      setColors(prevColors => {
        return [ "radial-gradient(circle at 7.5% 24%, rgb(237, 161, 193) 0%, rgb(250, 178, 172) 25.5%, rgb(190, 228, 210) 62.3%, rgb(215, 248, 247) 93.8%)", prevColors[1], prevColors[2], "radial-gradient(circle at 7.5% 24%, rgb(237, 161, 193) 0%, rgb(250, 178, 172) 25.5%, rgb(190, 228, 210) 62.3%, rgb(215, 248, 247) 93.8%)"]
      })
    }

    function bigTime3(){
      setColors(prevColors => {
        return ["linear-gradient(111.7deg, rgb(251, 198, 6) 2.4%, rgb(224, 82, 95) 28.3%, rgb(194, 78, 154) 46.2%, rgb(32, 173, 190) 79.4%, rgb(22, 158, 95) 100.2%)", "linear-gradient(89.9deg, rgb(255, 18, 18) -2.8%, rgb(252, 246, 19) 50.8%, rgb(0, 159, 8) 107.9%) ", prevColors[2], prevColors[3],]
      })
    }

    function bigTime4(){
      setColors(prevColors => {
        return [prevColors[0], "linear-gradient(122.3deg, rgb(111, 71, 133) 14.6%, rgb(232, 129, 166) 29.6%, rgb(237, 237, 183) 42.1%, rgb(244, 166, 215) 56.7%, rgb(154, 219, 232) 68.7%, rgb(238, 226, 159) 84.8%)", "radial-gradient(circle at 11.4% 50%, rgb(255, 37, 174) 0%, rgb(250, 237, 56) 90%)",  prevColors[3],]
      })
    }

    //mapping through squares to render them to DOM 
    // <Square color={colors[0]}/>
    // <Square color={colors[1]}/>
    // <Square color={colors[2]}/>
    // <Square color={colors[3]}/>

    const squares = colors.map((currentColor) => {
      return (
        <Square backgroundColor={currentColor}/>
      )
    }) 

  return (
    <div>
      <h2 className='title'>DJ REACT</h2>

    <div className="square--container">
      {squares}
    </div>

        <div className='btn-container'>
          <Button handleClick={smallDJ} buttonType="Small DJ"/>
          <Button handleClick={partyDJ} buttonType="Party DJ"/>

          <Button handleClick={firstPro} buttonType="Left Blue"/>
          <Button handleClick={secondPro} buttonType="Right Blue"/>
          <Button handleClick={bigTime1} buttonType="Big DJ 1"/>

          <Button handleClick={bigTime2} buttonType="Big DJ 2"/>

          <Button handleClick={bigTime3} buttonType="Big DJ 3"/>
          <Button handleClick={bigTime4} buttonType="Big DJ 4"/>
        </div>
    </div>
  );
}

export default App;
