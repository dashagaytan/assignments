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

// pre-saved hook to encrypt user password on signup
userSchema.pre("save", function(next){
    if(!this.isModified("password")) return next()
    bcrypt.hash(this.password, 10, (err, hash)=> {
        if(err) return next(err)
        this.password = hash
        next()
    })
})

// method to check envrypted password on login
userSchema.methods.checkPassword = function(passwordAttempt, callback){
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if(err) return callback(err)
        return callback(null, isMatch)
    })
}

// method to remove user's password for tocken/sending the response
userSchema.methods.withoutPassword = function(){
    const user = this.toObject()
    delete user.password
    return user;
}

module.exports = mongoose("User", userSchema)