const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
requre ('dotenv').config()
const {expressjwt} = requre('express-jwt')

// middleware
app.use(express.json())
app.use(morgan('dev'))

// connection to DB
mongoose.connect('mongodb://localhost:27017/rvtdb', 
() => console.log('Connected to the DB'))

// express routes 
app.use('/auth', require('./routes/authRouter.js'))
app.use('/api', expressjwt({ secret: process.env.SECRET, algorithms: ['HS26']}))
app.use('/issue', require('./routes/issueRouter.js'))
app.use('/comments', require('./routes/commentsRouter.js'))

app.use((err, req, res, nect)=> {
    console.log(err)
    if(err.name === 'UnauthorizedError'){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
}) 

app.listen(9000, () => {
    console.log('Server is running on port 9000')
})