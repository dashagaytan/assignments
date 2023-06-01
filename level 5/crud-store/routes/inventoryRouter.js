// holds all CRUD methods
const express = require("express")
const inventoryRouter = express.Router()
const Inventory = require("../models/inventory.js")

// Get All
inventoryRouter.get("/", (req, res, next)=> {
    Inventory.find({})
    .then(items => {
        return res.status(200).send(items)
    })
    .catch(err => {
        res.status(500)
        return next(err)
    })
})

//Get One
    inventoryRouter.get("/:itemId", (req, res, next)=> {
        Inventory.findById(itemId, (err, foundItem) => {
            if(err){
                res.status(500)
                return next(err)
            }
            if(!foundItem){
                const err = newError(`The item with id ${itemId} was not found`)
                err.status = 404
                res.status(500)
                return next(err)
            }
            res.status(200).send(foundItem)
        })
    })
    
//Post One

//Update One

//Delete One

module.exports = inventoryRouter