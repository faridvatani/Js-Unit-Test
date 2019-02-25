const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');

const articleSchema = Schema({
    title : { type : String , required : true},
    author : { type : String , required : true},
    body : { type : String , required : true},
    tags : { type : String , required : true},
} , { timestamps : true });

articleSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('article' , articleSchema);