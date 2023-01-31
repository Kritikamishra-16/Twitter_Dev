//requiring tweet model here
import Tweet from '../models/tweet.js'
import CrudRepository  from './crud-repository.js';

class TweetRepository extends CrudRepository{
    //to use it here we need to make sure crudrepository's constructor is called
    constructor(){
        //calling super constructor with Tweet model
        super(Tweet)
    }
    async create(data){
        try{
            const tweet=await Tweet.create(data);
            return tweet;
        }catch(error){
            console.log(error);
        }
    }


    async getWithComments(id){
        try{
            //along with the tweet also populate the comment and get it all togeather
            //Documents returned from queries with the lean option enabled are plain javascript objects, not Mongoose Documents.
            const tweet=await Tweet.findById(id).populate({path :'comments'}).lean();
            return tweet;
        }catch(error){
            console.log(error);
        }
    }


    async getAll(offset, limit){
        try{
            //skip offset number of tweets 
            //limit-> print only limit number of tweets 
            //for eg: (2,4) -> skip first two tweets and print rest 4 tweets only
            const tweet=await Tweet.find().skip(offset).limit(limit);
            return tweet;
        }catch(error){
            console.log(error);
        }
    }

    async find(id){
        try{
            //this populate method that we are using should always attached to mongoose query object it can not be attached to the final resolved tweet document
            const tweet=await Tweet.findById(id).populate({path: 'likes'});
            return tweet;
        }catch(error){
            console.log(error);
        }
    }
}


export default TweetRepository;
