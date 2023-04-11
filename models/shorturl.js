const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const shortid = require('shortid')

const UrlSchema = new Schema({
    full : {
        type : String, 
        // required : true,
    },
    short : {
        type : String,
        // required : true,
        default : shortid.generate  
    },
    clicks : {
        type : Number,
        // required: true,
        default : 0
    }
})


module.exports = mongoose.model("ShortUrl" , UrlSchema);