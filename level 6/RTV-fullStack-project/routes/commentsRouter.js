const express = require('express')
const commentsRouter = express.Router()
const Comments = require('../models/Comments.js')


// Add new Comment
commentsRouter.post('/', (req, res, next)=> {
    req.body.user = req.user._id
    const newComment = new Comment(req.body)
    newComment.save((err, savedComment)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedComment)
    })
})

// Delete Comment
commentsRouter.delete('/:commentId', (req, res, next)=> {
    Comments.findOneAndDelete(
        {_id: req.params.commentId},
        (err, deletedComment) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted comment: ${deletedComment}`)
        }
    )
})

// Update Comment 
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