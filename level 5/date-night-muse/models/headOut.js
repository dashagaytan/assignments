const mongoose = require('mongoos')
const Schema = mongoose.Schema

// Head out Date Night Muse bluepring 
const headOutSchema = new Schema({
    title: {
        type: String,
        required: true,
      },
      location: {
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

module.exports = mongoose.module("HeadOut", headOutSchema)