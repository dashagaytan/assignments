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

app.get("/bounties", (req, res)=>{
    res.send(bounties)
})

app.listen(8000, ()=> {
    console.log("Server is running on port 8000")
})