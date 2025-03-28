const Survey = require('../models/Survey');

// Function : Create survey
const createSurvey = async (req, res) =>{ 
    try {
        const { questions } = req.body;

        // Validate that questions exist and is an array
        if (!Array.isArray(questions) || questions.length === 0) {
            return res.status(400).json({ message: "Survey must have questions." });
        }

        // Ensure each question has a text field
        for (const [index, question] of questions.entries()) {

            // Validate text field (qs)
            if (!question.text) {
                return res.status(400).json({ message: `Question ${index + 1}: Text is required and must be a string.` });
            }

            // Validate voiceResponse
            if (question.voiceResponse) {

                // Validate data
                if (!question.voiceResponse.data) {
                    return res.status(400).json({
                        message: `Question ${index + 1}: voiceResponse must contain data.`
                    });
                }

                // Validate duration (if present)
                if (question.voiceResponse.duration && 
                    (typeof question.voiceResponse.duration !== 'number' || question.voiceResponse.duration <= 0)) {
                    return res.status(400).json({
                        message: `Question ${index + 1}: Duration must be a positive number.`
                    });
                }
            }
        }
      
        const newSurvey = new Survey({
            userId: req.user.id,
            questions
        });
      
        await newSurvey.save();
        return res.status(201).json(newSurvey);

    } catch (e) {
        console.error("Error creating survey:", error);
        return res.status(500).json({ message: "Error creating survey" });
    }
}

// Get all surveys from specific user 
const getAllSurveys = async (req, res) => {
    try {
        const surveys = await Survey.find({ userId: req.user.id });
        return res.status(200).json(surveys);
    } catch (error) {
        console.error("Error fetching surveys:", error);
        return res.status(500).json({ message: "Error fetching surveys" });
    }
};
  
// Get survey by their survey id
const getSurveyById = async (req, res) => {
    try {
        const survey = await Survey.findById(req.params.id);

        if (!survey) {
            return res.status(404).json({ message: "Survey not found" });
        }

        // Ensure that the survey belongs to the logged-in user
        if (survey.userId.toString() !== req.user.id.toString()) {
            return res.status(403).json({ message: "Unauthorized to view this survey" });
        }

        return res.status(200).json(survey);
    } catch (error) {
        console.error("Error fetching survey by ID:", error);
        return res.status(500).json({ message: "Error fetching survey" });
    }
};
  
// Update specific survey
const updateSurvey = async (req, res) => {
    try {
        const { questions } = req.body;

        if (!questions || questions.length === 0) {
            return res.status(400).json({ message: "Survey must have questions." });
        }

        const survey = await Survey.findById(req.params.id);

        if (!survey) {
            return res.status(404).json({ message: "Survey not found" });
        }

        // Ensure that the survey belongs to the logged-in user
        if (survey.userId.toString() !== req.user.id.toString()) {
            return res.status(403).json({ message: "Unauthorized to update this survey" });
        }

        // Update survey questions and other fields as needed
        survey.questions = questions;
        await survey.save();

        return res.status(200).json(survey);
    } catch (error) {
        console.error("Error updating survey:", error);
        return res.status(500).json({ message: "Error updating survey" });
    }
};
  
// Delete specific user
const deleteSurvey = async (req, res) => {
    try {
        const survey = await Survey.findById(req.params.id);

        if (!survey) {
        return res.status(404).json({ message: "Survey not found" });
        }

        // Ensure that the survey belongs to the logged-in user
        if (survey.userId.toString() !== req.user.id.toString()) {
            return res.status(403).json({ message: "Unauthorized to delete this survey" });
        }

        await survey.deleteOne();
        return res.status(200).json({ message: "Survey deleted successfully" });
    } catch (error) {
        console.error("Error deleting survey:", error);
        return res.status(500).json({ message: "Error deleting survey" });
    }
};
  
module.exports = {
    createSurvey,
    getAllSurveys,
    getSurveyById,
    updateSurvey,
    deleteSurvey
};