//importing TweetRepository, HashtagRepository class here
import {TweetRepository, HashtagRepository} from '../repository/index.js';

class TweetService{
    constructor(){
        //creating object of TweetRepository class to access all its functions
        this.tweetRepository= new TweetRepository();
        this.hashtagRepository=new HashtagRepository();
    }

    //writing a logic to create a tweet
    async create(data){

        const content= data.content;
        //extracting all the hashtags present inside the tweet
        const tags= content.match(/#[a-zA-Z0-9_]+/g) //this regex extract hashtags
                           .map((tag)=>tag.substring(1)) // '#tweet'-> 'tweet'
                            .map((tag)=> tag.toLowerCase());

        //creating the tweets
        const tweet= await this.tweetRepository.create(data);

        //getting all already present tags and then extracting only its title not the whole object
        let alreadyPresentTags= await this.hashtagRepository.findByName(tags);
        let titleOfPresentTags=alreadyPresentTags.map(tags=>tags.title);


        //get all the new tags that are not already present
        let newTags=tags.filter(tag=> !titleOfPresentTags.includes(tag));
        //creating newTags as array of objects 
        newTags=newTags.map(tag=>{
            return {title: tag, tweets:[tweet.id]}
        });


        //creating all the new hashtags
        await this.hashtagRepository.bulkCreate(newTags);
        
        //add new tweet id inside all the already present hashtags
        alreadyPresentTags.forEach((tag) => {
            tag.tweets.push(tweet.id);
            tag.save();
        });
        return tweet;

        //todos
        /**
         * 1.Bulkcreate in mongoose
         * 2.Filter title of hashtag based on multiple tags
         * 3.How to add tweet id inside all the hashtags
         **/
    }
}
export default TweetService;