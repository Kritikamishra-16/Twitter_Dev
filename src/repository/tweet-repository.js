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
            const tweet=await Tweet.findById(id).populate({path :'comments'});
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
}

module.exports=TweetRepiository;
