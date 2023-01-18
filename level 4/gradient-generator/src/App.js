import React from "react";
import Generator from "./Generator";

function App() {
  const [gradient, setGradient] = React.useState({
    color1: '#ffffff',
    color2: '#000000',
    color3: '#ff00ff',
    angle: '0'
  })

function handleChange(event){
  const {name, value}= event.target
  setGradient(prevState => {
    return{
      ...prevState,
      [name]: value
    }
  })
  console.log(gradient)
}

// setting a cross-browser CSS code in a text box that user will be able to generate and copy. 
const cssColorCode = `background: linear-gradient(${gradient.angle}deg, ${gradient.color1}, ${gradient.color2}, ${gradient.color3});
-moz-background: linear-gradient(${gradient.angle}deg, ${gradient.color1}, ${gradient.color2}, ${gradient.color3});
-webkit: linear-gradient(${gradient.angle}deg, ${gradient.color1} , ${gradient.color2}, ${gradient.color3})`

const newGradient = `linear-gradient(${gradient.angle}deg, ${gradient.color1}, ${gradient.color2}, ${gradient.color3})`;

  return (
    <div>
      <h1 className="title">CSS Gradient Code Generator</h1>
  
    <div className="main-container">
      <Generator>
        <h2>GRADIENT OPTIONS:</h2>
          <form className="form">
            <h3>Color1:</h3>
            <h3>{gradient.color1}</h3>
              <input 
              type="color"
              name="color1"
              value={gradient.color1}
              onChange={handleChange}
              className="color-input"
              />
            <h3>Color2:</h3>
            <h3>{gradient.color2}</h3>
              <input 
              type="color"
              name="color2"
              value={gradient.color2}
              onChange={handleChange}
              className="color-input"
              />
            <h3>Color3:</h3>
            <h3>{gradient.color3}</h3>
              <input 
              type="color"
              name="color3"
              value={gradient.color3}
              onChange={handleChange}
              className="color-input"
              />

            <h3>Angle:</h3>
              <input
              type="number"
              name="angle"
              value={gradient.angle}
              min="0"
              max="180"
              className="angle-input"
              onChange={handleChange}
              />
          </form>
      </Generator>

      {/* gradient box with css code for user to copy */}
      <Generator>
        <div  className="gradient-box">
          <div className="gradient-color" style={{background: newGradient}}>  </div>
          <p>CSS Code:</p>
          <textarea readOnly value={cssColorCode} cols="50" rows="6"/>
        </div>
      </Generator>
    </div>
    </div>
  );
}

export default App;
