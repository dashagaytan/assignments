const express = require("express");
const headOutRouter = express.Router();
const HeadOut = require('../models/headOut')

//GET All
headOutRouter.get("/", (req, res, next)=> {
    HeadOut.find({})
    .then(items => {
        return res.status(200).send(items);
    })
    .catch(err => {
        res.status(500)
        return next(err)
    })
})

//Get by category
headOutRouter.get("/search/category", (req, res, next)=> {
    HeadOut.find({ category: req.query.category})
    .then(items => {
        res.status(200).send(items)
    })
    .catch(err => {
        res.status(500)
        return next(err)
    })
})

//Post One (not available for users)
headOutRouter.post("/", (req, res, next)=>{
    const newHeadOut = new HeadOut(req.body);
    newHeadOut.save()
      .then(saveHeadOut => {
        return res.status(201).send(saveHeadOut);
      })
      .catch(err => {
        res.status(500);
        return next(err);
      });
})

// //Get one
// headOutRouter.get(":/headOutId", (req, res, next)=> {
//     const headOutId = req.params.headOutId
//     const foundHeadOut = items.find(item => item._id === headOutId)
//     if(!foundHeadOut){
//         const err = new Error(`The item with id ${headOutId} was not found`)
//         err.status = 404
//         res.status(500)
//         return next(err)
//     }
// })

// put request (not available for users)
// headOutRouter.put("/:headOutId", (req, res, next)=> {
//     HeadOut.findOneAndUpdate(
//         {_id: req.params.headOutId},
//         req.body, {new: true})
//         .then(updatedItem => {
//             if(!updatedItem){
//                 return res.status(404).send("Item not found")
//             }
//             return res.status(200).send(updatedItem)
//         })
//         .catch(err => {
//             res.status(500)
//             return next(err)
//         })
// })

module.exports = headOutRouter