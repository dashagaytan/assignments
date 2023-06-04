const express = require("express")
const morgan = require('morgan')
const app = express()
const mongoose = require("mongoose")

//Middleware (for every request)
app.use(express.json())  // Looks for a request body, and turns it inot 'req.body'
app.use(morgan('dev')) // Logs requests to the console

// Connect to DB, db default port is 27017
mongoose.connect('mongodb://localhost:27017/datenightdb')
 .then(() => console.log("Connected to DB"))

// Routes we tell the app to use our routes that we have created in order for the server to see it.
app.use("/stayIn", require("./routes/stayInRoutes.js"))
app.use("/tvShows", (require("./routes/headOutRoutes.js")))

//error handler
app.use((err, req, res, next)=>{
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(8080, () => {
    console.log("The server is running on port 8080")
}) 