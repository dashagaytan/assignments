const express = require("express")
const {v4: uuidv4} = require('uuid')

const app = express()

//Middleware (for every request)
app.use(express.json())

const bounties = [
    {firstName: "Luke", lastName: "Skywalker", living: true, bounty: 20490 ,type: 'Jedi', _id: uuidv4()},
    {firstName: "Darth", lastName: "Sidious", living: false, bounty: 0, type: 'Sith', _id: uuidv4()},
    {firstName: "Darth", lastName: "Maul", living: false, bounty: 0, type: 'Sith', _id: uuidv4()},
    {firstName: "Obi-Wan", lastName: "Kenobi", living: true, bounty: 543400, type: 'Jedi', _id: uuidv4()}
]

app.get("/bounties", (req, res)=>{
    res.send(bounties)
})

app.post("/bounties", (req, res)=>{
    const newBounty = req.body
    newBounty._id = uuidv4();
    bounties.push(newBounty)
    res.send(`${newBounty.firstName} was added to your API`)
})



app.listen(9000, ()=>{
    console.log("Server is running on port 9000")
})

module.exportts = express