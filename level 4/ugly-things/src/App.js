import React from "react";
import NavBar from './components/NavBar'
import Form from './components/Form'
import UglyList from "./components/UglyList";
import Footer from './components/Footer'
import { UglyThingsProvider } from "./components/UglyContext";


function App() {
  return (
    <div className="App">
      <UglyThingsProvider>
        <NavBar />
        <Form />
        <UglyList />
        <Footer />
      </UglyThingsProvider>
    </div>
  );
}

export default App;
