const express = require('express');
const { registerCompany, getCompany, getCompaniesById, updateCompany } = require('../controllers/companyController');
const { isAuthenticated } = require('../middlewares/isAuthenticated');


const companyRoute = express.Router();

companyRoute.post('/register', isAuthenticated, registerCompany);
companyRoute.get('/get',isAuthenticated,getCompany);
companyRoute.get('/get/:id',isAuthenticated,getCompaniesById);
companyRoute.patch('/update/:id',isAuthenticated,updateCompany);

module.exports = {
    companyRoute
}