import mongoose from 'mongoose';

const likeSchema=new mongoose.Schema({
    //on which model we are going to like
    onModel:{
        type: String,
        required: true,
        enum: ['Tweet','Comment']
    },
    //contains id of what model we liked it can be either tweetid or commentid
    likeable: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        //it can refer to either Tweet or Comment model
        refPath: 'onModel'
    },
    //id of the user who will like
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
},{timestamps:true}); 

const Like=mongoose.model('Like',likeSchema);

export default Like;