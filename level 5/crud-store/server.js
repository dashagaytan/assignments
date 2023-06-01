const express = require("express")
const morgan = require("morgan")
const mongoose = require("mongoose")
const app = express()

//Middleware (for every request)
app.use(express.json())  // Looks for a request body, and turns it inot 'req.body'
app.use(morgan('dev')) // Logs requests to the console

mongoose.connect('mongodv://localhost:27017/crudStoredb')
    .then(()=> console.log("Connected to DB"))

app.use("/inventory", require("./routes/inventoryRoute.js"))    // route we tell the app to use and for server to see

// error handler
app.use((err, req, res, next)=>{
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(8000, () => {
    console.log("Server is running on port 8000")
})