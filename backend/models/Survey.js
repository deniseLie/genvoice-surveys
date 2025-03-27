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
            required: true,
            maxlength: 500
        },
        voiceResponse: {
            audioUrl: { type: String }, // Store URL if hosting files separately
            audioFile: { type: Buffer }, // Or store binary data directly
            contentType: { type: String },
            duration: { type: Number }, // In seconds
        },
        transcript: { 
            type: String, 
            maxlength: 1000 // Optional: limit length for transcript
        }
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Survey', SurveySchema);