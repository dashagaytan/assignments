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
    upvoted: {
        type: "Schema.Types.ObjectId",
        ref: "User",
        type: Number,
        default: 0
    },
    downvoted: {
        type: "Schema.Types.ObjectId",
        ref: "User",
        type: Number,
        default: 0
    },
    postedBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}) 

module.exports = mongoose.model("Issue", issueSchema)