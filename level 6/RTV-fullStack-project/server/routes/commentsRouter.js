const express = require('express')
const commentsRouter = express.Router()
const Comments = require('../models/Comments.js')

// Get all issues
commentsRouter.get('/', (req, res, next)=> {
    Comments.find((err, comments)=> {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comments)
    })
})

// Get issues by user id
commentsRouter.get('/user', (req, res, next)=> {
    Comments.find({ user: req.auth._id}, (err, comments)=> {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comments)
    })
})

// Add new Issue
commentsRouter.post('/', (req, res, next)=> {
    req.body.user = req.auth._id
    const newComment = new Issue(req.body)
    newComment.save((err, savedComment)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedComment)
    })
})

// Delete Issue
commentsRouter.delete('/:commentId', (req, res, next)=> {
    Comments.findOneAndDelete(
        {_id: req.params.commentId, user: req.auth._id},
        (err, deletedComment) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted comment: ${deletedComment.title}`)
        }
    )
})

// Update Issue 
commentsRouter.put('/:commentId', (req, res, next)=> {
    Comments.findOneAndUpdate(
        {_id: req.params.commentId, user: req.auth._id},
        req.body,
        {new: true},
        (err, updatedComment)=> {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(updatedComment)
        }
    )
})

module.exports = commentsRouter;