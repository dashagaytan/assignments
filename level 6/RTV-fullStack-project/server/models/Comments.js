const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentsSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    issue: {
        type: Schema.Types.ObjectId,
        ref: 'Issue',
        require: true
    }
})