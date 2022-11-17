import React from 'react';

function App() {
  const [nameData, setNameData] = React.useState({
    name: "",
    orderList: "",
  })

  function handleClick(){

  }

  function handleSubmit(e){
    e.preventDefault()
  }

  return (
    <div className="from-container">
      <form onSubmit={handleSubmit}>

      </form>
    </div>
  );
}

export default App;
