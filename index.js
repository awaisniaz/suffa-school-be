import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import cookieParser from 'cookie-parser';

import router from './routes/user-router'


const app = express();

// Use of All By default Middleware
app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json()) 
app.use(cors());
app.use(cookieParser());

app.use('',router)


app.listen(4000,()=>{
    console.log('&#x1f602 Hurry I am Listening Port 4000')
})