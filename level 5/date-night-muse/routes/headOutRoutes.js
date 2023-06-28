const express = require("express");
const headOutRouter = express.Router();
const HeadOut = require('../models/headOut')

//GET All
headOutRouter.get("/", (req, res, next)=> {
    HeadOut.find((err, headOuts) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(headOuts)
    })
})

//Get by category
headOutRouter.get("/search/category", (req, res, next)=> {
    HeadOut.find({ category: req.query.category}, (err, headOuts) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(headOuts)
    })
})

//Post One (not available for users)
headOutRouter.post("/", (req, res, next)=>{
    const newHeadOut = new HeadOut(req.body);
    newHeadOut.save((err, saveHeadOut) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(saveHeadOut)
    })
})


module.exports = headOutRouter