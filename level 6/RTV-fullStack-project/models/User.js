const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        require: true,
        lowecase: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    memberSince: {
        type: Date,
        default: Date.now
    },
    isAdmin: {
        type: Boolean,
        default: false
    }

})

module.exports= mongoose.model("User", userSchema)