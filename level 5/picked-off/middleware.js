const express = require('express')
const middlewareRouter = express.Router()

middlewareRouter.use("/search", (req, res, next)=>{
    console.log("Middleware fired")
    next()
})

module.exports = middlewareRouter