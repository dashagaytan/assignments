const express = require('express')
const User = require('../models/User')
const authRouter = express.Router()
const jwt = require('jsonwebtoken')

// signup 
authRouter.post('/signup', (req, res, next)=> {
    User.findOne({ username: req.body.username.toLowerCase()}, (err, user)=> {
        if(err){
            res.status(500)
            return next(err)
        }
        if(user){
            res.status(403)
            return next(new Error('This username already exists'))
        }
        const newUser = new User(req.body)
        newUser.save((err, savedUser)=> {
            if(err){
                res.status(500)
                return next(err)
            }
            // return user info and a token
                                          //payload    ,  //secret from .env->file
            const token = jwt.sign(savedUser.toObject(), process.env.SECRET)
            return res.status(200).send({ token, user: savedUser})
        })
    })
})

//login
authRouter.post('/login', (req, res, next)=> {
    User.findOne( { username: req.body.username.toLowerCase()}, (err, user)=> {
        if(err){
            res.status(500)
            return next(err)
        }
        if(!user){
            res.status(403)
            return next(new Error('Username or Password are incorrect'))
        }
        if(req.body.password !== user.password){
            res.status(403)
            return next(new Error('Username or Password are incorrect'))
        }
        const token = jwt.sign(user.toObject(), process.env.SECRET)
        return res.status(200).send({ token, user })
    })
})

module.exports = authRouter;