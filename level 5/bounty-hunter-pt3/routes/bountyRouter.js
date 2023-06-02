const express = require("express")
const bountyRouter = express.Router()
const Bounty = require("../models/bounty.js")


//get all 
bountyRouter.get("/", (req, res, next)=> {
    Bounty.find({})
    .then(bounty => {
      return res.status(200).send(bounty);
    })
    .catch(err => {
      res.status(500);
      return next(err);
    });
})

// get one bounty
bountyRouter.get(":/bountyId", (req, res, next) => {
    Bounty.findById(bountyId, (err, foundBounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        if(!foundBounty){
            const err = newError(`The item with id ${bountyId} was not found`)
            err.status = 404
            res.status(500)
            return next(err)
        }
        res.status(200).send(foundBounty)
    })
})

//add one // POST request
bountyRouter.post("/", (req, res, next)=>{
   const newBounty = new Bounty(req.body);
   newBounty.save()
   .then(savedBounty => {
    return res.status(201).send(savedBounty)
   })
   .catch(err => {
    res.status(500);
    return next(err);
   })
})

//delete one / DELETE request
bountyRouter.delete("/:bountyId", (req, res, next)=>{
    Bounty.findOneAndDelete(
        {_id: req.params.bountyId})
        .then((deleteBounty)=> {
            if(!deleteBounty){
                return res.status(404).send("Item not found");
            }
            return res.status(200).send(`Successfully deleted item ${deleteBounty.title} from the database`)
        })
        .catch((err)=>{
            res.status(500)
            return next(err)
        })
})

//update one / PUT request
bountyRouter.put("/:bountyId", (req, res)=>{
    Bounty.findByIdAndUpdate(
        {_id: req.params.bountyId},
        req.body,
        { new: true })
            .then((updatedBounty)=> {
                if(!updatedBounty){
                return res.status(404).send("Item not found")
            }
            return res.status(200).send(updatedBounty)
    })
            .catch((err)=> {
                res.status(500)
                return next(err)
            })
    })       

module.exports = bountyRouter