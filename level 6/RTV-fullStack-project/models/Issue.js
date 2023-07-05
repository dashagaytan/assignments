const mongoose = require('mongoose')
const Schema = mongoose.Schema

const issueSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    }, 
    user: {
       type: Schema.Types.ObjectId,
       ref: 'User',
       required: true
    },
    upvotedBy: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    downvotedBy: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    issueVotes: {
        type: Number,
        default: 0
    },
    postDate: {
        type: Date,
        default: Date.now()
    }
}) 

module.exports = mongoose.model("Issue", issueSchema)