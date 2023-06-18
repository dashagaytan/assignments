const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentsSchema = new Schema({
   comment:{
        type:String,
        required: true
   },
   issue: {
       type: Schema.Types.ObjectId,
       ref: 'Issue',
       required: true
    },
    userComment: {
        type: Schema.Types.ObjectId,
        ref:'User',
        required: true
    }
})

module.exports= mongoose.model("Comments", commentsSchema)