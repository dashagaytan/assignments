import React from "react";
import Form from "./Form"
import UglyList from "./UglyList";
import {UglyProvider} from "./UglyContext"

function App() {
  return (
    <div className="App">
      <UglyProvider>
        <Form />
        <UglyList />
      </UglyProvider>
    </div>
  );
}

export default App;
