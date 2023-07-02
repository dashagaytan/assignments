const express = require('express')
const commentsRouter = express.Router()
const Comments = require('../models/Comments.js')


// get all comments 
commentsRouter.get('/', (req, res, next)=> {
    Comments.find({}, (err, comments) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comments)
    })
})

// get one comment by issue id
commentsRouter.get('/:issueId', (req, res, next)=> {
    Comments.find({issue: req.params.issueId}, (err, comments) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comments)
    })
})

// Add new Comment
commentsRouter.post('/:issueId', (req, res, next)=> {
    req.body.user = req.params.issueId
    const newComment = new Comments(req.body)
    newComment.save((err, comment) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comment)
    })
})
// Add new Comment
// commentsRouter.post('/:issueId', (req, res, next)=> {
//     req.body.user = req.user._id
//     const issueId = req.params.issueId
//     req.body.username = req.user.username
//     const newComment = new Comment(req.body)
//     Comments.findById({_id: issueId}, (err, issue) => {
//         if(err){
//             res.status(500)
//             return next(err)
//         }
//         issue.comment.push(newComment)
//         issue.populate("comment")
//         issue.save()

//         return res.status(200).send(issue)
//     })
// })

// Delete Comment
// commentsRouter.delete('/:commentId', (req, res, next)=> {
//     Comments.findOneAndDelete(
//         {_id: req.params.commentId},
//         (err, deletedComment) => {
//             if(err){
//                 res.status(500)
//                 return next(err)
//             }
//             return res.status(200).send(`Successfully deleted comment: ${deletedComment}`)
//         }
//     )
// })

// Update Comment 
// commentsRouter.put('/:commentId', (req, res, next)=> {
//     Comments.findOneAndUpdate(
//         {_id: req.params.commentId, user: req.auth._id},
//         req.body,
//         {new: true},
//         (err, updatedComment)=> {
//             if(err){
//                 res.status(500)
//                 return next(err)
//             }
//             return res.status(200).send(updatedComment)
//         }
//     )
// })

module.exports = commentsRouter;