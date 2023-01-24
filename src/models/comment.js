//we are defining schema here and creating a model
//schema is like a blueprint and models are actual instances that connect to the databases and do querying for you
const mongoose= require('mongoose');

//schema
const commentSchema= new mongoose.Schema({
    content: {
        type: String,
        reqired: true
    }
}, {timestamps : true});

//create a model having a name 'Comment' and will follow the commentSchema
const Comment= mongoose.model('Comment', commentSchema);
module.exports= Comment;