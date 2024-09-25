const { CompanyModel } = require("../models/companymodel");


//  <----------------------for registering new company------------------------>

const registerCompany = async (req,res)=>{
    try {
        const companyName = req.body;
        if(!companyName){
            return res.status(400).json({
                message:"Company name is required",
                success: false
            })
        }
        let company = await CompanyModel.findOne({name:companyName});
        if(company){
            return res.status(400).json({
                message: "You connot register with same company",
                success:false
            })
        }
        company = await CompanyModel.create({
            name:companyName,
            userId:req.id
        });

        return res.status(200).json({
            message:"Company registered successfully",
            success:true
        });

    } catch (error) {
        console.log(error);
        
    }
}


// <----------------for getting companies of specific user only-------------------->

const getCompany = async (req,res)=>{
    try {
        const userId = req.id; //logged in user id only
        const companies = await CompanyModel.find({userId});
        if(!companies){
            return res.status(404).json({
                message:"Companies not found",
                success:false
            })
        };

        return res.status(200).json({
            companies,
            success:true
        })

    } catch (error) {
        console.log(error);
        
    }
}


// <=======================for getting company by ID=================================>

const getCompaniesById = async (req,res)=>{
    try {
        const companyId = req.param.id;
        const company = await CompanyModel.findById({companyId});
        if(!company){
            return res.status(404).json({
                message:"Company not found",
                success:false
            })
        }
        return res.status(200).json({
            company,
            success:true
        })
    } catch (error) {
        console.log(error);
        
    }
};


// <======================for updating comapany data======================>

const updateCompany = async (req,res)=>{
    try {
        const {name,description, website,location} = req.body;
        const file = req.file;
        const updateData = {name,description,website,location};
        const company = await CompanyModel.findByIdAndUpdate(req.param.id,updateData,{new:true});
        if(!company){
            return res.status(404).json({
                message:"Company not found",
                success:false
            })
        }

        return res.status(200).json({
            message:"Company information updated",
            success:true
        })
    } catch (error) {
        console.log(error);
        
    }
};


module.exports = {
    registerCompany,
    getCompany,
    getCompaniesById,
    updateCompany
}