const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Head out Date Night Muse bluepring 
const headOutSchema = new Schema({
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
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      }
})

module.exports = mongoose.model("HeadOut", headOutSchema)