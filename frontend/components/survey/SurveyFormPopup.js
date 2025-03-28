import { useState, useEffect } from "react";
import { surveyService } from "../../services/surveyService";
import RecordingButton from "../audio/RecordingButton";
import AudioPlayer from "../audio/AudioPlayer";
import { useAudioRecorder } from "../../hooks/useAudioRecorder";
import { compressAudioData } from "../../utils/compressAudioData";

export default function SurveyPopup({ mode, survey, onClose, onSave }) {
    
    // Form data structure
    const [formData, setFormData] = useState({
        questions: [
            {
                text: '',
                voiceResponse: null, // { data: Buffer, contentType: string, duration: number }
                transcript: null
            },
            {
                text: '',
                voiceResponse: null,
                transcript: null
            }
        ]
    });
    const [errors, setErrors] = useState({});

    // Hook
    const { recordingId, isRecording, startRecording, stopRecording } = useAudioRecorder();

    // Initialize form
    useEffect(() => {
        if (mode === 'edit' && survey) {
            setFormData({
                questions: [
                survey.questions[0] || { text: '', voiceResponse: null, transcript: null },
                survey.questions[1] || { text: '', voiceResponse: null, transcript: null }
                ]
            });
            } else {
            setFormData({
                questions: [
                { text: '', voiceResponse: null, transcript: null },
                { text: '', voiceResponse: null, transcript: null }
                ]
            });
        }
    }, [mode, survey]);

    // Handle input changes
    const handleQuestionChange = (e, questionIndex) => {
        const { value } = e.target;
        setFormData(prev => {
            const updatedQuestions = [...prev.questions];

            updatedQuestions[questionIndex] = {
              ...updatedQuestions[questionIndex],
              text: value
            };
            return { ...prev, questions: updatedQuestions };
          });

        // Clear error
        if (errors[`question${questionIndex + 1}`]) {
        setErrors(prev => ({ ...prev, [`question${questionIndex + 1}`]: '' }));
        }
    };

    // Handle audio recording for responses
    const handleAudioRecording = async (questionIndex) => {
        const fieldName = `response${questionIndex}`;
        const questionAudioId = `${mode}-${questionIndex}`; // Unique ID for each question
        
        // Stop recording
        if (isRecording && recordingId === questionAudioId) {
            const audioBlob = await stopRecording();
            if (!audioBlob) return;

            // Convert Blob to ArrayBuffer then to Buffer-like object
            const arrayBuffer = await audioBlob.arrayBuffer();
            const audioBuffer = Buffer.from(arrayBuffer);
            const duration = await calculateAudioDuration(audioBlob);

            // Save blob recording
            setFormData(prev => {
                const updatedQuestions = [...prev.questions];

                updatedQuestions[questionIndex] = {
                    ...updatedQuestions[questionIndex],
                    voiceResponse: {
                        data: audioBuffer,
                        contentType: audioBlob.type || 'audio/webm',
                        duration: duration
                    }
                };
                return { ...prev, questions: updatedQuestions };
              });
            
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

        // Check all questions 
        formData.questions.forEach((question, index) => {
            if (!question.text.trim()) {
                newErrors[`question${index + 1}`] = `Question ${index + 1} is required`;
            }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevents default form submission behavior
        if (!validate()) return;

        console.log("im submittinggg ", formData.questions[0]?.voiceResponse);
        try {
            // Compress audio data if needed
            const compressedSurveyData = {
                questions: await Promise.all(
                    formData.questions.map(async (question) => ({
                        text: question.text,
                        voiceResponse: question.voiceResponse?.data
                            ? {
                                data: await compressAudioData(question.voiceResponse.data),
                                contentType: question.voiceResponse.contentType,
                                duration: question.voiceResponse.duration
                                }
                            : null
                    }))
                )
            };

            const result = mode === 'edit'
                ? await surveyService.updateSurvey(survey._id, compressedSurveyData)
                : await surveyService.createSurvey(compressedSurveyData);
            
            onSave(result);
            onClose();
        } catch (error) {
            console.error(`${mode === 'edit' ? 'Update' : 'Create'} survey error:`, error);
        }
    };

    // Function : Calculate durationa
    const calculateAudioDuration = async (blob) => {
        return new Promise((resolve) => {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const fileReader = new FileReader();
        
            fileReader.onload = function() {
                audioContext.decodeAudioData(this.result)
                .then(buffer => {
                    resolve(buffer.duration);
                })
                .catch(() => {
                    // Fallback estimation if decode fails
                    resolve(blob.size / (16000 * 2)); // Rough estimate
                });
            };
        
            fileReader.readAsArrayBuffer(blob);
        });
    };

    return (
        <div className="survey-popup-overlay">
            <div className="survey-popup-container">
                <div className="survey-popup-form">
                    <h2 className="survey-popup-heading">
                        {mode === 'edit' ? 'Edit Survey' : 'Create New Survey'}
                    </h2>
                    
                    <form onSubmit={handleSubmit}>
                        {formData.questions.map((question, index) => (
                            <div key={index} className={`mb-${index === 0 ? '4' : '6'}`}>
                                <label className="block text-gray-700 mb-2" htmlFor={`question${index + 1}`}>
                                    Question {index + 1}
                                </label>
                                <input
                                    type="text"
                                    id={`question${index + 1}`}
                                    name={`question${index + 1}`}
                                    value={question.text}
                                    onChange={(e) => handleQuestionChange(e, index)}
                                    className={`survey-popup-input ${
                                        errors[`question${index + 1}`] ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                    placeholder={`Enter question ${index + 1}`}
                                />
                                {errors[`question${index + 1}`] && (
                                    <p className="survey-popup-error">{errors[`question${index + 1}`]}</p>
                                )}
                            
                                <div className="survey-popup-audio-section">
                                    <label className="survey-popup-audio-label">
                                        Response {index + 1} (Audio)
                                    </label>
                                    <div className="survey-popup-recording-btn">
                                        <RecordingButton
                                            isRecording={isRecording}
                                            onStart={() => handleAudioRecording(index)}
                                            onStop={() => handleAudioRecording(index)}
                                            disabled={isRecording && recordingId !== `${mode}-${index}`}
                                            recordingId={recordingId}
                                            currentId={`${mode}-${index}`}
                                            duration={question.voiceResponse?.duration}
                                            maxDuration={60}
                                        />
                                        {question.voiceResponse && (
                                            <div className="mt-2">
                                                <AudioPlayer voiceResponse={question.voiceResponse} />
                                                {/* <p className="text-sm text-gray-500 mt-1">
                                                    Duration: {question.voiceResponse.duration?.toFixed(1) || 0}s
                                                </p> */}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
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