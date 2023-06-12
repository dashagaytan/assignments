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
    }
    
    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    // },
})