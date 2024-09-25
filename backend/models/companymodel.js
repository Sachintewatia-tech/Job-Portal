const mongoose = require('mongoose');

const companySchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
    },
    location:{
        type:String,
    },
    website:{
        type:String,
    },
    logo:{
        type:String,
    },
    userId:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:true
    }
},{timestamps:true});

const CompanyModel = mongoose.model('Company',companySchema);


module.exports = {
    CompanyModel  
}