import express from 'express';
import bodyParser from 'body-parser';

import {connect} from './config/database.js';
import apiRoutes from './routes/index.js'

const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api', apiRoutes);


//importing service class here
import service from "./services/tweet-service.js";

app.listen(3000, async ()=>{
    console.log('server started');
    await connect();
    console.log('Mongo db connected');
    
    // //creating a service object to access its functions
    // let ser =new service();
    // await ser.create({
    //     content : "my other #CODE works or #NOT?"
    // });
})