const mongoose = require('mongoose');

const SurveySchema = new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    questions: [{
        text: {
            type: String,
            required: true
        },
        voiceResponse: {
            data: { type: Buffer }, // store binary data directly
            contentType: { type: String },
            duration: { type: Number }, // In seconds
        },
        transcript: { 
            type: String, 
        }
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Survey', SurveySchema);