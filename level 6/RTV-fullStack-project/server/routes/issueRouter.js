const express = require('express')
const issueRouter = express.Router()
const Issue = require('../models/Issue.js')

// Get all issues
issueRouter.get('/', (req, res, err)=> {
    Issue.find((err, issues)=> {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})

// Get issues by user id
issueRouter.get('/user', (req, res, err)=> {
    Issue.find({ user: req.auth._id}, (err, issues)=> {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})

// Add new Issue
issueRouter.post('/', (req, res, err)=> {
    req.body.user = req.auth._id
    const newIssue = new Issue(req.body)
    newIssue.save((err, savedIssue)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedIssue)
    })
})

// Delete Issue
issueRouter.delete('/:issueId', (req, res, err)=> {
    Issue.findOneAndDelete(
        {_id: req.params.issueId, user: req.auth._id},
        (err, deletedIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted issue: ${deletedIssue.title}`)
        }
    )
})

// Update Issue 
issueRouter.put('/:issueId', (req, res, err)=> {
    Issue.findOneAndUpdate(
        {_id: req.params.issueId, user: req.auth._id},
        req.body,
        {new: true},
        (err, updatedIssue)=> {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(updatedIssue)
        }
    )
})

module.exports = issueRouter;