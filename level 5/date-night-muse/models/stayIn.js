const mongoose = require('mongoose')
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
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      }
})

module.exports = mongoose.model("StayIn", stayInSchema)