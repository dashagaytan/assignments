import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Bounty from "./components/Bounty.js"
import AddBountyForm from "./components/AddBountyForm.js"

function App() {
  //initial state for bounties 
  const [bounties, setBounties] = useState([])

  //GET request for all bounties that are saved in our 'Fake DB'
  function getBounties(){
    axios.get("/bounties")
    .then(res => {
      console.log(res.data)
      setBounties(res.data)
    })
    .catch(err => console.log(err))
  }

  //POST request : user will be able to add a new bounty to the existing list.
  function addBounty(newBounty){
    axios.post('/bounties', newBounty)
    .then(res => {
      setBounties(prevState => [...prevState, res.data])
    })
  }



  useEffect(()=> {
    getBounties();
  },[])

  return (
    <div className="App">
      <h1 style={{margin: "20px", color: "rgb(0, 77, 35)"}}>Bounties:</h1>
     {
      bounties.map(bounty => <Bounty 
        {...bounty}
        key={bounty._id}
        />)
     }
    </div>
  );
}

export default App;
