const express = require("express")
const {v4: uuidv4} = require('uuid')
const app = express()

//middleware for every request
app.use(express.json())

//array of objects / Fake data
const bounties = [
    {firstName: "Luke", lastName: "Skywalker", living: true, bounty: 20490 ,type: 'Jedi', _id: uuidv4()},
    {firstName: "Darth", lastName: "Sidious", living: false, bounty: 0, type: 'Sith', _id: uuidv4()},
    {firstName: "Darth", lastName: "Maul", living: false, bounty: 0, type: 'Sith', _id: uuidv4()},
    {firstName: "Obi-Wan", lastName: "Kenobi", living: true, bounty: 543400, type: 'Jedi', _id: uuidv4()}
]

//get all 
app.get("/bounties", (req, res)=>{
    res.send(bounties)
})

//add one // POST request
app.post("/bounties", (req, res)=>{
    const newBounty = req.body
    newBounty._id = uuidv4();
    bounties.push(newBounty)
    res.send(`${newBounty.firstName} was added to your API`)
})

//delete one / DELETE request
app.delete("/bounties/:bountyId", (req, res)=>{
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(item => item._id === bountyId)
    bounties.splice(bountyIndex, 1)
    console.log("Bounty was deleted from Data Base")
})

//update one / PUT request
app.put("/bounties/:bountyId", (req, res)=>{
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(item => item._id === bountyId)
    const foundBounty = Object.assign(bounties[bountyIndex], req.body)
    res.send(foundBounty)

})

app.listen(8000, ()=> {
    console.log("Server is running on port 8000")
})

module.exports = express;