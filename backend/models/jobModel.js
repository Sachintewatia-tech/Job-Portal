const mongoose = require('mongoose');

const jobSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    salary:{
        type: Number,
        required: true
    },
    requirement:[
        {type:String}
    ],
    location:{
        type: String,
        required: true
    },
    jobType:{
        type: String,
        required: true
    },
    position:{
        type: Number,
        required: true
    },
    company:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required:true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
    experienceLevel:{
        type:Number,
        required:true
    },
    applications:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Application',
    }]
},{timestamps:true});

const JobModel = mongoose.model("job",jobSchema);

module.exports = {
 JobModel   
}
