const express = require("express")
const morgan = require("morgan")
const mongoose = require("mongoose")
const app = express()

//Middleware (for every request)
app.use(express.json())  // Looks for a request body, and turns it inot 'req.body'
app.use(morgan('dev')) // Logs requests to the console

