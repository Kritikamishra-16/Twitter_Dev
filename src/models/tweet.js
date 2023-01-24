//we are defining schema here and creating a model
//schema is like a blueprint and models are actual instances that connect to the databases and do querying for you
const mongoose= require('mongoose');

//schema
const tweetSchema= new mongoose.Schema({
    content: {
        type: String,
        reqired: true
    },
    userEmail:{
        type:String
    },
    comments:[
        {
            //we are storing comment ID here i.e. model ID and name of the model
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]


    /*********************
    //comment will be an array here we are manually nesting schema inside another schema
    comments:[
        {
            content:{
                type:String,
                required:true
            }
        }
    ]
    ***********************/
}, {timestamps : true});

//create a model having a name 'Tweet' and will follow the tweetSchema
const Tweet= mongoose.model('Tweet', tweetSchema);
module.exports= Tweet;