const { JobModel } = require("../models/jobModel");

//<=========================== for posting new job======================>

const postJob = async(req,res)=>{
    try {
        const {title,description,requirement,salary,location,jobType,experience,position,companyId} = req.body;
        const userId = req.id;

        if(!title || !description || !requirement || !salary || !location || !jobType || !experience || !position || !companyId){
            return res.status(400).json({
                message:"something is missing",
                success:false
            })
        }
        
        const job = await JobModel.create({
            title,
            description,
            requirement:requirement.split(",") ,
            salary:salary,
            location,
            jobType,
            experienceLevel:experience,
            createdBy:userId,
            company:companyId,
            position
        });

        return res.status(200).json({
            message:"New job created successfully.",
            job,
            success:true
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "An error occurred while creating new job",
            success: false,
            error: error.message
          });
    }
};

// <=======================getting all jobs===========================>

const getAllJobs = async(req,res)=>{
    try {
        const keyword = req.query.keyword || "";
        const query = {
            $or:[
                {title:{$regex:keyword,$options:"i"}},
                {description:{$regex:keyword,$options:"i"}},
            ]
        };
        const jobs = await JobModel.find(query).populate({
            path:"company"
        }).sort({createdAt:-1});
        if(!jobs){
            return res.status(401).json({
                message:"Jobs not found",
                success:false
            })
        }
        return res.status(200).json({
            jobs,
            success:true
        })
    } catch (error) {
        console.log(error);
        
        return res.status(500).json({
            message: "An error occurred while getting all jobs",
            success: false,
            error: error.message
          });
    }
};


// <===================getting job by ID======================>

const getJobById = async(req,res)=>{
    try {
        const jobId = req.params.id;
        const job = await JobModel.findById(jobId);
        if(!job){
            return res.status(401).json({
                message:"Job not found",
                success:false
            })
        };
        return res.status(200).json({
            job,
            success:true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "An error occurred while getting job by id",
            success: false,
            error: error.message
          });
    }
};


// <====================getting admin jobs======================>

const getAdminJobs  = async(req,res)=>{
    try {
        const adminId = req.id;
        const jobs = await JobModel.find({createdBy:adminId});
        if(!jobs){
            return res.status(404).json({
                message:"Job not found",
                success:false
            })
        };
        return res.status(200).json({
            jobs,
            success:true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "An error occurred while getting company by id",
            success: false,
            error: error.message
          });
        
    }
};



module.exports = {
    postJob,getJobById,getAdminJobs,getAllJobs
}
