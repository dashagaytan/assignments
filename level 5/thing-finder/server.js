const express = require("express")
const app = express()
const {v4: uuidv4} = require('uuid')

//middleware (for every request)
app.use(express.json()) //looks for a reques body, and turns it into 'req.body'

const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
        _id: uuidv4()
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
        _id: uuidv4()
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
        _id: uuidv4()
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
        _id: uuidv4()
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
        _id: uuidv4()
    },{
        name: "soup",
        type: "food",
        price: 300,
        _id: uuidv4()
    },{
        name: "flour",
        type: "food",
        price: 100,
        _id: uuidv4()
    }
]
//get all
app.get("/inventory", (req, res)=>{
    res.send(inventoryItems)
} )

//get one url params
// app.get("/:itemId", (req, res)=> {
//     const itemId = req.params.itemId
//     const foundItem = inventoryItems.find(item => item._id === itemId)
//     res.send(foundItem)
// })

//get one url quiry
app.get("/inventory/type", (req, res)=>{
    const type = req.query.type
    const filterType = inventoryItems.filter(item => item.type === type)
    res.send(filterType)
})

app.listen(8000, () => {
    console.log("Server is running on port 8000")
})
