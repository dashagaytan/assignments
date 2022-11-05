import React from 'react';
import Square from "./Square"

function App() {
  const [square, setSquare] = React.useState([white, white, white, white])

  
  return (
    <div>
        <Square />
    </div>
  );
}

export default App;
