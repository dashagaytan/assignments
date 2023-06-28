const express = require('express')
const authRouter = express.Router()
const User = require('../models/user.js')
const jwt = require('jsonwebtoken')

//Signup 
authRouter.post('/signup', (req, res, next) => {
    User.findOne({ username: req.body.username.toLowerCase() }, (err, user)=> {
        if(err){
            res.status(500)
            return next(err)
        }
        // if the user exists, return error
        if(user){
            res.status(403)
            return next(new Error('This user already exists'))
        }
        // new user instance with the provided data
        const newUser = new User(req.body)
        newUser.save((err, savedUser) => {
            if(err){
                res.status(500)
                return next(err)
            }
            // return user info and a token
            const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET)
            return res.status(201).send({token, user: savedUser.withoutPassword() })
        })
    })
})

//Login 

authRouter.post('/login', (req, res, next)=>{
    // find user by the provided username in DB
    User.findOne({ username: req.body.username.toLowerCase()}, (err, user) => {
        if(err){
            res.status(500)
            return next(err)
        }
        if(!user){
            res.status(403)
            return next(new Error('Username or Password are incorrect'))
        }
        user.checkPassword(req.body.password, (err, isMatch)=> {
            if(err){
                res.status(500)
                return next(new Error('Username or Password are incorrect'))
            }
            if(!isMatch){
                res.status(403)
                return next(new Error('Username or Password are incorrect'))
            }
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
            return res.status(200).send({ token, user: user.withoutPassword()})
        })
    })
})

module.exports = authRouter;