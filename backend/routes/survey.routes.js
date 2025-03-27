const express = require('express');
const router = express.Router();

// Middleware
const verifyJWT = require('../middleware/verifyJWT');
const { getAllSurveys, createSurvey, getSurveyById, updateSurvey, deleteSurvey } = require('../controllers/survey.controller');

// create a new survey 
// fetch all surveys created by user id
// get detail of specific survey
// update survey entry
// delete survey entry

router.post('/', verifyJWT, createSurvey);
router.get('/', verifyJWT, getAllSurveys);
router.get('/:id', verifyJWT, getSurveyById);
router.put('/:id', verifyJWT, updateSurvey);
router.delete('/:id', verifyJWT, deleteSurvey);

module.exports = router;