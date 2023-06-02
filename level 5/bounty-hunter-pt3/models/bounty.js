const mongoose = require("mongoose")
const Schema = mongoose.Schema

//Bounty blueprint

const bountySchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    bounty: {
        type: Number,
        required: true
    },
    living: Boolean
})

module.exports = mongoose.model("Bounty", bountySchema)