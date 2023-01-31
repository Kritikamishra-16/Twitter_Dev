import express from 'express';
import bodyParser from 'body-parser';

import {connect} from './config/database.js';
import apiRoutes from './routes/index.js'

import {UserRepository, TweetRepository} from './repository/index.js'

const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api', apiRoutes);


//importing service class here
import service from "./services/tweet-service.js";
import LikeService from './services/like-service.js';

app.listen(3000, async ()=>{
    console.log('server started');
    await connect();
    console.log('Mongo db connected');
    
    /************************
    //1.creating a user
    const userRepo= new UserRepository();
    const users= await userRepo.create({
        email: "mishrakritika2001@gmail.com",
        password: "Shipra@16*",
        name: "Kritika Mishra"
    });

    ************************/

    /************************** 
    //2.create a tweet from postman
    ***************************/

    //3.using a toggle like function
    const userRepo= new UserRepository();
    const tweetRepo= new TweetRepository();

    const tweets= await tweetRepo.getAll(0,10);
    const users= await userRepo.getAll();
    
    const likeService=new LikeService();
    await likeService.toggleLike( users[0].id,'Tweet', tweets[0].id ); //toggleLike(userId, modelType, modelId)

})