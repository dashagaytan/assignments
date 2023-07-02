const express = require('express')
const { update } = require('../models/Issue.js')
const issueRouter = express.Router()
const Issue = require('../models/Issue.js')

// Get all issues
issueRouter.get('/', (req, res, next)=> {
    Issue.find((err, issue)=> {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issue)
    })
})

// Get issues by user id
issueRouter.get('/user', (req, res, next)=> {
    Issue.find({ user: req.auth._id}, (err, issue)=> {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issue)
    })
})

// Add new Issue
issueRouter.post('/', (req, res, next)=> {
    req.body.user = req.auth._id
    // req.body.username = req.user.username
    const newIssue = new Issue(req.body)
    newIssue.save((err, savedIssue) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedIssue)
    })
})

// Delete Issue
issueRouter.delete('/:issueId', (req, res, next)=> {
    Issue.findOneAndDelete(
        {_id: req.params.issueId},
        (err, deletedIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted issue: ${deletedIssue.title}`)
        }
    )
})  

// upvote an issue
issueRouter.put("/upvote/:issueId", (req, res, next) => {
    Issue.findByIdAndUpdate(
        { _id: req.params.issueId },
        { $addToSet: { upvotedBy: req.auth._id }, 
        $pull: { downvotedBy: req.auth._id } },
        { new: true }
    )
        .exec((err, updatedIssue) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedIssue)
        })
})

// downvote an issue 👎🏼
issueRouter.put("/downvote/:issueId", (req, res, next) => {
    Issue.findByIdAndUpdate(
        { _id: req.params.issueId },
        { $addToSet: { downvotedBy: req.auth._id }, 
        $pull: { upvotedBy: req.auth._id } },
        { new: true }
    )
        .exec((err, updatedIssue) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedIssue)
        })
})

module.exports = issueRouter;