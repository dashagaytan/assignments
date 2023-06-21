const mongoose = require('mongoose')
const Schema = mongoose.Schema

const issueSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }, 
    user: {
        type: Schema.Types.ObjectId,
       ref:'User',
       required: true
    },
    upvote: {
        type: Number,
        default: 0
    },
    downvote: {
        type: Number,
        default: 0
    },
    userVotes: [{
        type: String
    }],
    postDate: {
        type: Date,
        default: Date.now()
    }
}) 

module.exports = mongoose.model("Issue", issueSchema)