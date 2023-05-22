const express = require('express')
const middlewareSetup = require("./middleware")
const app = express()

app.use("/search", middlewareSetup) 

app.get("/search", (req, res)=>{
    req.body = {note: "This is your reminder to keep practicing!!!"}
    res.send(req.body)
})

app.listen(8000, ()=> {
    console.log("The server is running on port 8000")
})