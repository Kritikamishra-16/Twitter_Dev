const express=require('express');
const connect=require('./config/database');
const app=express();

//const Tweet=require('./models/tweet');

const TweetRepiository=require('./repository/tweet-repository');
const Comment=require('./models/comment');

app.listen(3000, async ()=>{
    console.log('server started');
    await connect();
    console.log('Mongo db connected');

    //GET THE TWEET (NESTED COMMENT SCHEMA)
    const tweetRepo=new TweetRepiository();
    const tweet=await tweetRepo.getWithComments('63cfc50e9ac50f9010a94d5b');
    console.log(tweet);
    /*********************
    CREATING THE TWEET 
    // const tweet=await tweetRepo.create({content: 'Tweet with comment schema'});
    // console.log(tweet);
    // const comment= await Comment.create({content : 'new comment'});
    // tweet.comments.push(comment);
    // await tweet.save();
    // console.log(tweet);

    **********************/
    

    /****************************************************
    //creating the object here then calling the async functions defined in class
    
    const tweetRepo=new TweetRepiository();
    //updating a tweet
    const tweet=await tweetRepo.update('63cf9598a3227539f9c20e37',{
        content: 'now I am good'
    });
    //creating a tweet
    const tweet=await tweetRepo.create({content:'tweet with a comment'});
    console.log(tweet);
    tweet.comments.push({content:'first comment here'});
    await tweet.save();
    console.log(tweet);

    /**************************************************** */


   /******************************************* */
    //->creating a tweet document by requiring models directly here
    // const tweet= await Tweet.create({
    //     content: 'Third tweet'
    // })

    //->get all the tweets
    // const tweets= await Tweet.find();
    // console.log(tweets);

    //getting tweets based on filter
    // const tweet= await Tweet.find({userEmail: 'a@b.com'});
    // console.log(tweet);

    //updating a tweet
    // const tweet=await Tweet.findById('63cf9480801f320c0c150341');
    // tweet.userEmail='b@c.com';
    // await tweet.save();
    // console.log(tweet);
    /********************************************* */

})