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
    inventoryRouter.post("/", (req, res, next) => {
        const newItem = new Inventory(req.body);
        newItem.save()
        .then(savedItem=>{
            return res.status(200).send(savedItem);
        })
        .catch(err => {
            res.status(500)
            return next(err)
        })
    })

//Update One
inventoryRouter.put("/:itemId", (req, res) => {
    Inventory.findOneAndUpdate(
        {_id: req.params.itemId},   
        req.body,                        
        { new: true })                   
            .then((updatedItem)=> {
            if(!updatedItem){
                return res.status(404).send("Item not found")
            }
            return res.status(200).send(updatedItem)
        })
        .catch((err)=> {
            res.status(500)
            return next(err)
        })
})

//Delete One
inventoryRouter.delete("/:itemId", (req, res, next)=>{
    Inventory.findOneAndDelete(
        {_id: req.params.itemId})
        .then((deletedItem)=> {
            if(!deletedItem){
                return res.status(404).send("Item not found");
            }
            return res.status(200).send(`Successfully deleted item ${deletedItem.name} from the database`)
        })
        .catch((err)=>{
            res.status(500)
            return next(err)
        })
})

module.exports = inventoryRouter