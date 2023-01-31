import Like from '../models/like.js';
import CrudRepository from './crud-repository.js';

class LikeRepository extends CrudRepository{
    constructor(){
        super(Like);
    }

    //it will return the "like" object based on the data [which contains 'user' who likes the tweet and 'likeable' means the model id on which like is done]
    async findByUserAndLikeable(data){
        try{
            const like= await Like.findOne(data);
            return like;
        }catch(error){

        }
    }
}

export default LikeRepository;
