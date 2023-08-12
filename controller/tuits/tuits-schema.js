import mongoose from "mongoose";
const schema = mongoose.Schema({
    
    topic: String,
    userName: String,
    title: String,
    time: String,
    image: String,
    

},{collection : "tuits"});

export default schema;