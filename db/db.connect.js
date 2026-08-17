const mongoose = require('mongoose');
require('dotenv').config();

const MONGOURI = process.env.MONGODB;

const initializeDB = async()=>{
    await mongoose.connect(MONGOURI).then(()=>{
        console.log("Connected to DB");
    }).catch((err)=>{
        console.log("❌ Error found -", err);    
    });
}

module.exports = {initializeDB};
