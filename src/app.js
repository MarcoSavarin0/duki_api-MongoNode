const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const createRoles = require('./lib/initialSetUp')

const songRoutes = require('./routes/song.routes')
const userRoutes = require('./routes/auth.routes')

const app = express();
createRoles.createRoles()
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URL,{dbName: process.env.MONGO_DB_NAME})
const db = mongoose.connection;

app.use('/api/songs',songRoutes)
app.use('/api/auth',userRoutes)


const port = process.env.PORT || 3000 ;
app.listen(port,()=>{
    console.log('servidor iniciado en el puerto ', port);
})  
