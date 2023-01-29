//we are defining schema here and creating a model
//schema is like a blueprint and models are actual instances that connect to the databases and do querying for you
import mongoose from 'mongoose';

//schema
const tweetSchema= new mongoose.Schema({
    content: {
        type: String,
        reqired: true,
        max: [250, 'Tweet cannot be more than 250 characters']
    },
    // userID, comments

}, {timestamps : true});
//{timestamps : true } -> we are able to add created_at and updated_at in documents


//create a model having a name 'Tweet' and will follow the tweetSchema
const Tweet= mongoose.model('Tweet', tweetSchema);
//exporting tweet model
export default Tweet;