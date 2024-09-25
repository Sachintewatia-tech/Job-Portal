const {isAuthenticated} = require('../middlewares/isAuthenticated')
const {login,register,upddateProfile,logout} = require('../controllers/userController')
const express = require('express');


const userRoute = express.Router();

userRoute.post('/register', register);
userRoute.route("/login").post(login);
userRoute.route("/profile/update").patch( isAuthenticated, upddateProfile);
userRoute.get("/logout",logout);

module.exports = {userRoute};