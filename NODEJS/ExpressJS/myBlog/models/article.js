var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var articleSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:false
    },
    content:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("article",articleSchema)