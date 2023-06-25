const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
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
    isAdmine: {
        type: Boolean,
        default: false
    }
})