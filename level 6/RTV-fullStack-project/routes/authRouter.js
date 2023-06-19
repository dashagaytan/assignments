const express = require('express')
const User = require('../models/User')
const authRouter = express.Router()
const jwt = require('jsonwebtoken')

// signup 
authRouter.post('/signup', (req, res, next)=> {
    //check if the username already exists in the db
    User.findOne({ username: req.body.username.toLowerCase()}, (err, user)=> {
        // handle db errors
        if(err){
            res.status(500)
            return next(err)
        }
        // if the username exists, return error
        if(user){
            res.status(403)
            return next(new Error('This username already exists'))
        }
        // new user instance with the provided data
        const newUser = new User(req.body)
        // save new user to db
        newUser.save((err, savedUser)=> {
            if(err){
                res.status(500)
                return next(err)
            }
            // return user info and a token
                                          //payload    ,  //secret from .env->file
            const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET)
            return res.status(200).send({ token, user: savedUser.withoutPassword() })
        })
    })
})

//login
authRouter.post('/login', (req, res, next)=> {
    // find user by the provided userbame in db
    User.findOne( { username: req.body.username.toLowerCase() }, (err, user)=> {
        // handle db errors
        if(err){
            res.status(500)
            return next(err)
        }
        if(!user){
            res.status(403)
            return next(new Error('Username or Password are incorrect'))
        }

        user.checkPassword(req.body.password, (err, isMatch) => {
            if(err){
              res.status(403)
              return next(new Error("Username or Password are incorrect"))
            }
            if(!isMatch){
              res.status(403)
              return next(new Error("Username or Password are incorrect"))
            }
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
            return res.status(200).send({ token, user: user.withoutPassword() })
        })
    })
})

module.exports = authRouter;