const mongoose = require('mongoose')
const Schema = mongoose.Schema

const issueSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    }, 
    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        require: true
    }
})

module.exports = mongoose.model("Issue", issueSchema)