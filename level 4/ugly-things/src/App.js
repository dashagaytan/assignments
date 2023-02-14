import React from "react";
import NavBar from './components/NavBar'
import Form from './components/Form'
import Footer from './components/Footer'
import { UglyThingsProvider } from "./components/UglyContext";


function App() {
  return (
    <div className="App">
      <UglyThingsProvider>
        <NavBar />
        <Form />
        <Footer />
      </UglyThingsProvider>
    </div>
  );
}

export default App;
