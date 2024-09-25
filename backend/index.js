const express = require('express');
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();
const app = express();
const cookiParser = require("cookie-parser");
const { connect } = require('./utils/db');
const { userRoute } = require('./Routes/userRoutes');
const { companyRoute } = require('./Routes/companyRoute');
app.get("/",(req,res)=>{
    res.status(200).json({message:"welcome to backend"});
});

//<--------------------- middleware ------------------------->
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookiParser());
const corsOption = {
    origin: 'http//localhost:5173',
    credentials:true
};
app.use(cors(corsOption));

// <-------------------------------api's---------------------->

app.use('/api/v1/user',userRoute);
app.use('/api/v1/company',companyRoute);


app.listen(process.env.port||3000,()=>{
    connect();
    console.log(`server runnning on port ${process.env.port}`);
    
})