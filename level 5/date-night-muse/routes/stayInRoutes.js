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

//Post One (not available for users)
stayInRouter.post("/", (req, res, next)=> {
    const stayIn = new StayIn(req.body)
    stayIn.save((err, items)=>{
        if(err) { 
            res.status(500)
            return next(err)
        }
        return res.status(201).send(items)
    } )
})

// stayInRouter.post("/", (req, res, next)=>{
//     const newStayIn = new StayIn(req.body);
//     newStayIn.save()
//       .then(saveStayIn => {
//         return res.status(201).send(saveStayIn);
//       })
//       .catch(err => {
//         res.status(500);
//         return next(err);
//       });
// })

module.exports = stayInRouter;