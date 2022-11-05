import React from 'react';
import Square from "./Square"

function App() {
  const [colors, setColors] = React.useState([white, white, white, white])

  function smallDJ(){
    
  }


  return (
    <div>
        <Square className="square1"/>
        <Square className="square2"/>
        <Square className="square3"/>
        <Square className="square4"/>

        <div>
          <button className='btn1'></button>
          <button lassName='btn2'></button>

          <button lassName='btn3'></button>
          <button lassName='btn4'></button>

          <button lassName='btn5'></button>
          <button lassName='btn6'></button>

          <button lassName='btn7'></button>
          <button lassName='btn8'></button>
          <button lassName='btn9'></button>

        </div>
    </div>
  );
}

export default App;
