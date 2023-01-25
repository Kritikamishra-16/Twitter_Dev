//requiring tweet model here
const Tweet=require('../models/tweet');

class TweetRepiository{
    async create(data){
        try{
            const tweet=await Tweet.create(data);
            return tweet;
        }catch(error){
            console.log(error);
        }
    }

    async get(id){
        try{
            const tweet=await Tweet.findById(id);
            return tweet;
        }catch(error){
            console.log(error);
        }
    }

    async update(tweetId,data){
        try{
            //when we call findByIdAndUpdate() it will update the document properly but returns the old document
            //const tweet=await Tweet.findByIdAndUpdate(tweetId,data);
            //return tweet;

            //inorder to return the updated content pass the options content as {new:true}
            const tweet=await Tweet.findByIdAndUpdate(tweetId,data,{new: true});
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

    async destroy(id){
        try{
            const tweet=await Tweet.findByIdAndRemove(id);
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
}


module.exports=TweetRepiository;
