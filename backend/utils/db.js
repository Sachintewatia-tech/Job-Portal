const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const connect = async()=>{
    try {
        await mongoose.connect(process.env.url);
        console.log('backend connected successfully');
        
    } catch (error) {
        console.log(error);
        
    }
}
module.exports = {connect}