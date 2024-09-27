const express = require('express');
const { isAuthenticated } = require('../middlewares/isAuthenticated');
const { applyJob, getAppliedJobs, updateStatus } = require('../controllers/applicationController');

const applicationRouter = express.Router();

applicationRouter.get('/apply/:id',isAuthenticated,applyJob);
applicationRouter.get('/get',isAuthenticated,getAppliedJobs);
applicationRouter.get('/:id/applicants',isAuthenticated,applyJob);
applicationRouter.post('/status/:id/update',isAuthenticated,updateStatus);


module.exports = {
    applicationRouter
}