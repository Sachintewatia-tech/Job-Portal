const {UserModel} = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require ('jsonwebtoken')


// <--------------------------- Register controller ------------------------>
const register = async (req, res) => {
    try {
      const { fullname, email, mobile, password, role } = req.body;
  
      // Check if required fields are present
      if (!fullname || !email || !password || !mobile || !role) {
        return res.status(400).json({
          message: "Something is missing",
          success: false,
        });
      }
  
      // Check if user already exists
      const user = await UserModel.findOne({ email });
      if (user) {
        return res.status(400).json({
          message: "User already exists with this email",
          success: false,
        });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user
      await UserModel.create({
        fullname,
        email,
        mobile,
        password: hashedPassword, // store hashed password
        role,
      });
  
      // Respond with success
      return res.status(201).json({
        message: "Account created successfully",
        success: true,
      });
    } catch (error) {
      // Log the error for debugging
      console.error("Error in registration:", error);
  
      // Respond with a generic error message
      res.status(500).json({
        message: "Internal Server Error",
        success: false,
      });
    }
  };
  

//  < -------------------------login controller------------------------------- >

const login = async (req, res) => {
    try {
      const { email, password, role } = req.body;
  
      // Check if email, password, and role are provided
      if (!email || !password || !role) {
        return res.status(400).json({
          message: "Something is missing",
          success: false,
        });
      }
  
      // Check if user exists
      const user = await UserModel.findOne({ email });
      if (!user) {
        return res.status(401).json({
          message: "Incorrect password or email",
          success: false,
        });
      }
  
      // Verify the password
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (!isPasswordMatch) {
        return res.status(401).json({
          message: "Incorrect password or email",
          success: false,
        });
      }
  
      // Check if the role matches
      if (role !== user.role) {
        return res.status(400).json({
          message: "Account does not exist with the current role",
          success: false,
        });
      }
  
      // Create token data and sign the JWT
      const tokenData = { userId: user._id };
      const token = await jwt.sign(tokenData, process.env.key, { expiresIn: '1d' });
  
      const userData = {
        _id: user._id,
        fullname: user.fullname,
        mobile: user.mobile,
        role: user.role,
        profile: user.profile,
      };
  
      // Set the cookie with the token and send response
      return res
        .status(200)
        .cookie('token', token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpOnly: true, sameSite: 'strict' })
        .json({
          message: `Welcome back, ${user.fullname}`,
          user: userData,
          success: true,
        });
    } catch (error) {
      console.error("Error in login:", error);
  
      return res.status(500).json({
        message: "Error in logging in",
        success: false,
      });
    }
  };
  

// <---------------------logout controller----------------------------->
 const logout = async (req,res)=>{
    try {
        return res.status(200).cookie("token","",{maxAge:""}).json({
            message:"Logged out successfully",
            success:true
        })
    } catch (error) {
        console.log(error);
        
    }
}

// <-----------------------------profile update controller -------------------->
 const upddateProfile = async (req,res)=>{
    try {
        const {fullname,email,mobile,skills,bio} = req.body;
        const file = req.file;

        // .....cloudinary
        let skillsArr;
        if(skills){
             skillsArr = skills.split(",");
        }
        const userId = req.id; 
        let user = await UserModel.findById(userId);
        if(!user){
            return res.status(400).json({
                message:"User not found",
                success:false
            })
        }
        if(fullname) user.fullname = fullname;
        if(email) user.email = email;
        if(mobile) user.mobile = mobile;
        if(bio) user.profile.bio = bio;
        if(skills) user.profile.skills = skillsArr;

        // resume will come here

        await user.save();

        const updatedUser = {
            _id:user._id,
            fullname:user.fullname,
            mobile:user.mobile,
            role:user.role,
            profile:user.profile
        }

        res.status(200).json({
            message:"Profile Updated Successfully",
            updatedUser,
            success:true
        })

    } catch (error) {
        console.log(error);
        
    }
}

module.exports = {
    register,login,logout,upddateProfile
    
}