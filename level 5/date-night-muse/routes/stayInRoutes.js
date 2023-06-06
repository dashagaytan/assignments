const express = require("express")
const stayInRouter = express.Router();
const StayIn = require('../models/stayIn')

//GET All
stayInRouter.get("/", (req, res, next)=> {
    StayIn.find({})
    .then(items => {
        return res.status(200).send(items);
    })
    .catch(err => {
        res.status(500)
        return next(err)
    })
})

//Get one
stayInRouter.get(":/stayInId", (req, res, next)=> {
    const stayInId = req.params.stayInId
    const foundStayIn = items.find(item => item._id === stayInId)
    if(!foundStayIn){
        const err = new Error(`The item with id ${stayInId} was not found`)
        err.status = 404
        res.status(500)
        return next(err)
    }
})

//Get by category
stayInRouter.get("/search/category", (req, res, next)=> {
    StayIn.find({ category: req.query.category})
    .then(items => {
        res.status(200).send(items)
    })
    .catch(err => {
        res.status(500)
        return next(err)
    })
})

//Post One
stayInRouter.post("/", (req, res, next)=>{
    const newStayIn = new StayIn(req.body);
    newStayIn.save()
      .then(saveStayIn => {
        return res.status(201).send(saveStayIn);
      })
      .catch(err => {
        res.status(500);
        return next(err);
      });
})

// delete (not available for users)
stayInRouter.delete(":/stayInId", (req, res, next)=>{
    HeadOut.findOneAndDelete(
        {_id: req.params.stayInId}
    ) .then((deletedItem)=> {
        if(!deletedItem){
            return res.status(404).send("Item not found");
        }
        return res.status(200).send(`Successfully deleted item ${deletedItem.title}`)
    })
    .catch(err => {
        res.status(500)
        return next(err)
    })
})

// Put request (not available fo users)
stayInRouter.put("/:stayInId", (req, res, next)=> {
    StayIn.findOneAndUpdate(
        {_id: req.params.stayInId},
        req.body, {new: true})
        .then(updatedItem => {
            if(!updatedItem){
                return res.status(404).send("Item not found")
            }
            return res.status(200).send(updatedItem)
        })
        .catch(err => {
            res.status(500)
            return next(err)
        })
})

module.exports = stayInRouter