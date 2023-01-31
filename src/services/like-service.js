import {LikeRepository,TweetRepository} from '../repository/index.js'
class LikeService{
    constructor(){
        this.likeRepository=new LikeRepository();
        this.tweetRepository=new TweetRepository();
    }

    async toggleLike(modelId, modelType, userId){  // /api/v1/likes/toggle?id=modelid&type=Tweet
        if(modelType=='Tweet'){
            var likeable= await this.tweetRepository.find(modelId); //we also get all the likes associated with this tweet
            //likeable.populate({path: 'likes'});
        }else if(modelType=='Comment'){
            //TODO
        }else{
            throw new Error('unknown model type');
        }

        //checking if the like exist or not
        const exists=await this.likeRepository.findByUserAndLikeable({
            user: userId,
            onModel: modelType,
            likeable: modelId
        });
        //if the user has already liked the tweet then remove it
        if(exists){
            //pull object from an array
            likeable.likes.pull(exists.id);
            await likeable.save();
            await exists.remove();
            var isAdded=false;

        }else{  //else add a like
            const newLike= await this.likeRepository.create({
                user: userId,
                onModel:modelType,
                likeable:modelId
            });
            likeable.likes.push(newLike);
            await likeable.save();

            var isAdded=true;
        }
        return isAdded;
    }
}

export default LikeService;