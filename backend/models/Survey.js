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
            audioUrl: String,  // Store URL if hosting files separately
            audioFile: Buffer, // Or store binary data directly
            contentType: String,
            duration: Number   // In seconds
        },
        // transcript: String   // Optional: store text transcript
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
  });