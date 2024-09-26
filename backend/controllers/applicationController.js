const { Application } = require("../models/applicationModel");
const { JobModel } = require("../models/jobModel");


const applyJob = async(req,res)=>{
    try {
        const userId = req.id;
        const id = req.params.id;
        if(!id){
            return res.status(400).json({
                message:"Job id is required",
                success:false
            })
        };
        const isApplied = await Application.findOne({job:id,applicant:userId});
        if(isApplied){
            return res.status(400).json({
                message:"You have already applied for this job",
                success:false
            })
        };
        const job = await JobModel.findById(id);
        if(!job){
            return res.status(404).json({
                message:"Job not found",
                success:false
            })
        };
        const newApplication = await Application.create({
            job:id,
            applicant:userId
        });
        job.applications.push(newApplication._id);
        await job.save();
        return res.status(200).json({
            message:"Job Aplied Successfully",
            success:true
        })
    } catch (error) {
        console.log(error);
        
    }
};


const getAppliedJobs = async(req,res)=>{
    try {
        const userId = req.id;
        const application = await Application.find({applicant:userId}).sort({createdAt:-1}).populate({
            path:"job",
            options:{sort:{createdAt:-1}},
            populate:{
                path:"company",
                options:{sort:{createdAt:-1}}
            }
        });
        if(!application){
            return res.status(404).json({
                message:"No Applications",
                success:false
            })
        }

        return res.status(200).json({
            application,
            success:true
        })

    } catch (error) {
        console.log(error);
        
    }
};


const getApplicants = async(req,res)=>{
    try {
        const jobId = req.params.id;
        const job = await JobModel.findById(jobId).populate({
            path:"applications",
            options:{sort:{createdAt:-1}},
            populate:{
                path:"applicant"
            }
        });
        if(!job){
            return res.status(400).json({
                message:"Job not found",
                success:false
            })
        };

        return res.status(200).json({
            job,
            success:true
        })
        
    } catch (error) {
        console.log(error);
        
    }
};


const updateStatus = async(req,res)=>{
    try {
        const {status} = req.body;
        const applicationId = req.params.id;
        if(!status){
            return res.status(400).json({
                message:"Status is required",
                success:false
            })
        };

        const application = await Application.findOne({_id:applicationId});
        if(!application){
            return res.status(404).json({
                message:"Application not found",
                success:false
            })
        };
        application.status = status.toLowerCase();
        await application.save();
        return res.status(200).json({
            message:"Status updated successfully",
            success:true
        });
        
    } catch (error) {
        console.log(error);
        
    }
} 