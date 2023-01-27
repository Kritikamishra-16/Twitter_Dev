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

    const tweetRepo=new TweetRepiository();
    const tweet=await tweetRepo.create({content: 'with hooks now'});
    console.log(tweet);

})