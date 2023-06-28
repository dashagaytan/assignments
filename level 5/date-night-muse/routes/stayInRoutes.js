const express = require("express")
const stayInRouter = express.Router();
const StayIn = require('../models/stayIn')

//GET All
stayInRouter.get("/", (req, res, next)=> {
    StayIn.find((err, stayIns) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(stayIns)
    })
})

//Get by category
stayInRouter.get("/search/category", (req, res, next)=> {
    StayIn.find({ category: req.query.category}, (err, stayIns) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(stayIns)
    })

})

//Post One (not available for users)
stayInRouter.post("/", (req, res, next)=> {
    const newStayIn = new StayIn(req.body);
    newStayIn.save((err, saveStayIn) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(saveStayIn)
    })
})


module.exports = stayInRouter;