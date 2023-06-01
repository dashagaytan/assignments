const express = require("express")
const bountyRouter = express.Router()
const Bounty = require("../models/bounty.js")


//get all 
bountyRouter.get("/bounties", (req, res)=>{
    res.send(bounties)
})

//add one // POST request
bountyRouter.post("/bounties", (req, res)=>{
    const newBounty = req.body
    newBounty._id = uuidv4();
    bounties.push(newBounty)
    res.send(`${newBounty.firstName} was added to your API`)
})

//delete one / DELETE request
bountyRouter.delete("/bounties/:bountyId", (req, res)=>{
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(item => item._id === bountyId)
    bounties.splice(bountyIndex, 1)
    console.log("Bounty was deleted from Data Base")
})

//update one / PUT request
bountyRouter.put("/bounties/:bountyId", (req, res)=>{
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(item => item._id === bountyId)
    const foundBounty = Object.assign(bounties[bountyIndex], req.body)
    res.send(foundBounty)

})

module.exports = bountyRouter