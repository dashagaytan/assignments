const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentsSchema = new Schema({
   comment:{
        type: String,
        required: true
   },
   commentedBy: {
       type: String
   },
   issue: {
       type: Schema.Types.ObjectId,
       ref: 'Issue',
       required: true
    },
   username: {
        type: String
   },
   user: {
        type: Schema.Types.ObjectId,
        ref:'User',
        required: true
   },
})

module.exports= mongoose.model("Comments", commentsSchema)