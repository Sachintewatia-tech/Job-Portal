const express = require('express');
const { isAuthenticated } = require('../middlewares/isAuthenticated');
const { postJob, getAllJobs, getAdminJobs, getJobById } = require('../controllers/jobController');

const jobRoutes = express.Router();

jobRoutes.post('/post',isAuthenticated,postJob);
jobRoutes.get('/get',isAuthenticated,getAllJobs);
jobRoutes.get('/getadminjobs',isAuthenticated,getAdminJobs);
jobRoutes.get('/get/:id',isAuthenticated,getJobById);

module.exports = {
    jobRoutes
}