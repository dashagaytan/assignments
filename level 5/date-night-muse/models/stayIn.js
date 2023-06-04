const mongoose = require('mongoos')
const Schema = mongoose.Schema

// Stay In Date Night Muse bluepring 
const stayInSchema = new Schema({
    title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
})

module.exports = mongoose.module("StayIn", stayInSchema)