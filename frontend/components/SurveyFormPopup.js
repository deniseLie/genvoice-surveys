import { useState, useEffect, useRef } from "react";
import { surveyService } from "../services/surveyService";
import RecordingButton from "./RecordingButton";
import AudioPlayer from "./AudioPlayer";
import { useAudioRecorder } from "../hooks/useAudioRecorder";

export default function SurveyPopup({ mode, survey, onClose, onSave }) {
  // State for form data
  const [formData, setFormData] = useState({ 
    question1: '', 
    question2: '',
    response1: null,
    response2: null
  });
  
  const [errors, setErrors] = useState({});
  const { 
    recordingId, 
    isRecording, 
    startRecording, 
    stopRecording 
  } = useAudioRecorder();

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
    const questionId = `${mode}-${questionNum}`; // Unique ID for each question
    
    if (isRecording && recordingId === questionId) {
      // Stop recording
      const audioUrl = stopRecording();
      setFormData(prev => ({
        ...prev,
        [fieldName]: audioUrl
      }));
    } else {
      // Start recording
      try {
        await startRecording(questionId);
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
            voiceResponse: formData.response1,
            transcript: null 
          },
          { 
            text: formData.question2, 
            voiceResponse: formData.response2,
            transcript: null 
          }
        ]
      };

      let result;
      if (mode === 'edit') {
        result = await surveyService.updateSurvey(survey._id, surveyData);
      } else {
        result = await surveyService.createSurvey(surveyData);
      }
    
      onSave(result.data);
      onClose();
    } catch (error) {
      console.error(`${mode === 'edit' ? 'Update' : 'Create'} survey error:`, error);
      alert(error.message || `Failed to ${mode} survey`);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">
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
                className={`w-full p-2 border rounded ${errors.question1 ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Enter first question"
              />
              {errors.question1 && (
                <p className="text-red-500 text-sm mt-1">{errors.question1}</p>
              )}
              
              <div className="mt-2">
                <label className="block text-gray-700 mb-2">
                  Response 1 (Audio)
                </label>
                <div className="flex items-center">
                  <RecordingButton
                    isRecording={isRecording}
                    onStart={() => handleAudioRecording(1)}
                    onStop={() => handleAudioRecording(1)}
                    disabled={isRecording && recordingId !== `${mode}-1`}
                    recordingId={recordingId}
                    currentId={`${mode}-1`}
                  />
                  {formData.response1 && (
                    <AudioPlayer audioUrl={formData.response1} />
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
                className={`w-full p-2 border rounded ${errors.question2 ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Enter second question"
              />
              {errors.question2 && (
                <p className="text-red-500 text-sm mt-1">{errors.question2}</p>
              )}
              
              <div className="mt-2">
                <label className="block text-gray-700 mb-2">
                  Response 2 (Audio)
                </label>
                <div className="flex items-center">
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

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
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