// const app = require('./app');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
const host = 'localhost';
const mongoose = require('mongoose');
const router = require('./router');

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://kavishkapiyumal:hueI4FBZyDAapqEr@cluster0.8zxcmnr.mongodb.net/?appName=Cluster0'; // MongoDB connection string
const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    }
    catch(error) {
        console.error('Error connecting to MongoDB');
    }
};

connect();

const server = app.listen(port,host, () =>{
    console.log(`Node server is listening to ${server.address().port}`)
});

app.use('/api', router);