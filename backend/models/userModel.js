const mongoose = require('mongoose');
const userScehma = mongoose.Schema({
    fullname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true 
    },
    mobile:{
        type: Number,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        required: true,
        enum: ['student','recruiter']
    },
    profile:{
        bio:{type:String},
        skills:[{type:String}],
        resume:{type:String},
        resumeOriginalName: {type:String},
        company:{type:mongoose.Schema.Types.ObjectId,ref:'Company'},
        profilePhoto: { type:String, default:""}
    }
},{timestamps:true});

const UserModel = mongoose.model('User',userScehma);


module.exports = {
    UserModel
}