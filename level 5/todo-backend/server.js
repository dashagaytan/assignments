const express = require("express")
const {v4: uuidv4} = require('uuid')
const app = express();

//middleware for every request
app.use(express.json())

//fake data
const todos = [
    {
        name: "Clean the house",
        description: "Livingroom, bathrooms, bedroom",
        imgUrl: "http://www.myimage....",
        completed: false,
        _id: uuidv4()   
    },{
        name: "Walk my dog",
        description: "Go to Central Park",
        imgUrl: "http://www.myimage....",
        completed: true,
        _id: uuidv4()   
    },{
        name: "Grociery Run",
        description: "Go to Whole Foods",
        imgUrl: "http://www.myimage....",
        completed: true,
        _id: uuidv4()   
    },{
        name: "Make Dinner",
        description: "Chicken Enchiladas",
        imgUrl: "http://www.myimage....",
        completed: false,
        _id: uuidv4()   
    },{
        name: "Call Mom",
        description: "Facetime her...",
        imgUrl: "http://www.myimage....",
        completed: true,
        _id: uuidv4()   
    }
]

//GET all request
app.get("/", (req, res)=> {
    res.send(todos)
})

//GET ONE 
app.get("/:itemId", (req, res)=>{
    // console.log(req.params.itemId)
    const itemId = req.params.itemId
    const foundTodo = todos.find(todo => todo._id === itemId)
    res.send(foundTodo) 
})

//POST ONE / post request 
app.post("/", (req, res) => {
    const newTodo = req.body
    newTodo._id = uuidv4()
    todos.push(newTodo)
    res.send(`Added ${newTodo.name} to the Database`)
})

// UPDATE ONE / put request

//DELETE ONE / delete request




app.listen(8000,()=>{
    console.log("Server is running on port 8000")
})

module.exports = express;