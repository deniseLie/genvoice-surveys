import { useState, useEffect, useRef } from "react";
import { surveyService } from "../services/surveyService";
import RecordingButton from "./RecordingButton";
import AudioPlayer from "./AudioPlayer";
import { useAudioRecorder } from "../hooks/useAudioRecorder";

export default function SurveyPopup({ mode, survey, onClose, onSave }) {
    
    // States
    const [formData, setFormData] = useState({ 
        question1: '', 
        question2: '',
        response1: null,
        response2: null
    });
    
    const [errors, setErrors] = useState({});
    const { recordingId, isRecording, startRecording, stopRecording } = useAudioRecorder();

    // Initialize form when survey prop changes (edit mode)
    useEffect(() => {
        if (mode === 'edit' && survey) {
            setFormData({
                question1: survey.questions[0]?.text || '',
                question2: survey.questions[1]?.text || '',
                response1: survey.questions[0]?.voiceResponse || null,
                response2: survey.questions[1]?.voiceResponse || null
            });
        } else {
            setFormData({ 
                question1: '', 
                question2: '',
                response1: null,
                response2: null
            });
        }
    }, [mode, survey]);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    // Handle audio recording for responses
    const handleAudioRecording = async (questionNum) => {
        const fieldName = `response${questionNum}`;
        const questionAudioId = `${mode}-${questionNum}`; // Unique ID for each question
        
        // Stop recording
        if (isRecording && recordingId === questionAudioId) {
            const audioBlob = await stopRecording();
            if (!audioBlob) return;

            // Save blob recording
            setFormData(prev => ({
                ...prev,
                [fieldName]: audioBlob
            }));
            
        // Start recording
        } else {
            try {
                await startRecording(questionAudioId);
            } catch (error) {
                console.error('Recording failed:', error);
            }
        }
    };

    // Validate form
    const validate = () => {
        const newErrors = {};
        if (!formData.question1.trim()) newErrors.question1 = 'Question 1 is required';
        if (!formData.question2.trim()) newErrors.question2 = 'Question 2 is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevents default form submission behavior
        
        if (!validate()) return;

        try {
            const surveyData = {
                questions: [
                    { 
                        text: formData.question1, 
                        voiceResponse: formData.response1 || null,
                        transcript: null 
                    },
                    { 
                        text: formData.question2, 
                        voiceResponse: formData.response2 || null,
                        transcript: null 
                    }
                ]
            };

            console.log("Survey Data", surveyData);

            let result;
            if (mode === 'edit') {
                result = await surveyService.updateSurvey(survey._id, surveyData);
            } else {
                result = await surveyService.createSurvey(surveyData);
            }
            
            onSave(result);
            onClose();
        } catch (error) {
            console.error(`${mode === 'edit' ? 'Update' : 'Create'} survey error:`, error);
            alert(error.message || `Failed to ${mode} survey`);
        }
    };

    return (
        <div className="survey-popup-overlay">
            <div className="survey-popup-container">
                <div className="survey-popup-form">
                    <h2 className="survey-popup-heading">
                        {mode === 'edit' ? 'Edit Survey' : 'Create New Survey'}
                    </h2>
                    
                    <form onSubmit={handleSubmit}>
                        {/* Question 1 */}
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="question1">
                                Question 1
                            </label>
                            <input
                                type="text"
                                id="question1"
                                name="question1"
                                value={formData.question1}
                                onChange={handleChange}
                                className={`survey-popup-input ${errors.question1 ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder="Enter first question"
                            />
                            {errors.question1 && (
                                <p className="survey-popup-error">{errors.question1}</p>
                            )}
                        
                            <div className="survey-popup-audio-section">
                                <label className="survey-popup-audio-label">
                                    Response 1 (Audio)
                                </label>
                                <div className="survey-popup-recording-btn">
                                    <RecordingButton
                                        isRecording={isRecording}
                                        onStart={() => handleAudioRecording(1)}
                                        onStop={() => handleAudioRecording(1)}
                                        disabled={isRecording && recordingId !== `${mode}-1`}
                                        recordingId={recordingId}
                                        currentId={`${mode}-1`}
                                    />
                                    {formData.response1 && (
                                        <AudioPlayer audioBlob={formData.response1} />
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Question 2 */}
                        <div className="mb-6">
                            <label className="block text-gray-700 mb-2" htmlFor="question2">
                                Question 2
                            </label>
                            <input
                                type="text"
                                id="question2"
                                name="question2"
                                value={formData.question2}
                                onChange={handleChange}
                                className={`survey-popup-input ${errors.question2 ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder="Enter second question"
                            />
                            {errors.question2 && (
                                <p className="survey-popup-error">{errors.question2}</p>
                            )}
                        
                            <div className="survey-popup-audio-section">
                                <label className="survey-popup-audio-label">
                                    Response 2 (Audio)
                                </label>
                                <div className="survey-popup-recording-btn">
                                    <RecordingButton
                                        isRecording={isRecording}
                                        onStart={() => handleAudioRecording(2)}
                                        onStop={() => handleAudioRecording(2)}
                                        disabled={isRecording && recordingId !== `${mode}-2`}
                                        recordingId={recordingId}
                                        currentId={`${mode}-2`}
                                    />
                                    {formData.response2 && (
                                        <AudioPlayer audioUrl={formData.response2} />
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="survey-popup-actions">
                            <button
                                type="button"
                                onClick={onClose}
                                className="cancel-btn"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="submit-btn"
                            >
                                {mode === 'edit' ? 'Update Survey' : 'Create Survey'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}