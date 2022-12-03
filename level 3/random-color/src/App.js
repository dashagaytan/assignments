import React, { useReducer } from 'react'
import {useState, useEffect} from 'react'

function App() {
  const [color, setColor] = useState({})
  // const [randomColor, setRandomColor] = useState({})

  useEffect(()=> {
    fetch(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()} ${color}`)
    .then(res =>res.json())
    .catch(err => console.log(err))
  })

  return (
    <div className='container'>
      <h1> Random Color</h1>
      <button onClick={() => setColor(prevColor => prevColor)}>Next</button>
    </div>
  );
}

export default App;
