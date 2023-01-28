import mongoose from 'mongoose';

const hashtagSchema= new mongoose.Schema({
    title:{
        type: String,
        required : true
    },

    //there will be multiple tweetID's that will belong to a hashtag
    tweets:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tweet' //reference to model name
        }
    ]

},{timestamps: true});

const Hashtag = mongoose.model('Hashtag', hashtagSchema);
export default Hashtag;