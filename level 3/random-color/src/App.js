import React from 'react'
import {useState, useEffect} from 'react'

function App() {
  const [color, setColor] = useState('')
  const [randomColor, setRandomColor] = useState('')
  // const url = "https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}"

  useEffect(()=> {
    fetch(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()} ${color}`)
    .then(res =>res.json())
    .then(data => setColor(data.colors[0].hex))
    .catch(err => console.log(err))
  }, [])

  function handleClick(){
    setRandomColor(color)
  }

  return (
    <div className='container' style={{backgroundColor: `#${randomColor}`}}>
      <button onClick={handleClick}>Get Random Color</button>
    </div>
  );
}

export default App;
