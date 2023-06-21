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
    postedBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    upvote: {
        type: "Schema.Types.ObjectId",
        ref: "User",
        type: Number,
        default: 0
    },
    downvote: {
        type: "Schema.Types.ObjectId",
        ref: "User",
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