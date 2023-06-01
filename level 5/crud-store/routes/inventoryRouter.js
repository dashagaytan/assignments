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

//Post One

//Update One

//Delete One

module.exports = inventoryRouter