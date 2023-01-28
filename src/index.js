import express from 'express';
import {connect} from './config/database.js';
const app=express();

//importing service class here
import service from "./services/tweet-service.js";

app.listen(3000, async ()=>{
    console.log('server started');
    await connect();
    console.log('Mongo db connected');
    
    //creating a service object to access its functions
    let ser =new service();
    await ser.create({
        content : "my other #CODE works or #NOT?"
    });
})