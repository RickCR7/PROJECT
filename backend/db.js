const mongoose = require('mongoose');
const mongoURL = "mongodb+srv://akash:akash12345@cluster0.5hvnm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const mongodb = async()=>{
    try {
        await mongoose.connect(mongoURL);
        console.log("Connected successfully to MongoDB");
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
        process.exit(1); // Exit the process if the connection fails
    }
    
}

module.exports = mongodb;
