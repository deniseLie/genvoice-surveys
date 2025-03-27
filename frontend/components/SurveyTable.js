import { useState
  , useEffect } from 'react';

import SurveyPopup from './SurveyFormPopup';
import { surveyService } from '../services/surveyService';
import { useAudioRecorder } from '../hooks/useAudioRecorder';
import RecordingButton from '../components/RecordingButton';
import AudioPlayer from '../components/AudioPlayer';


export default function SurveyTable() {

  // State
  const [surveyData, setSurveyData] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [currentSurvey, setCurrentSurvey] = useState(null);
  const [popupMode, setPopupMode] = useState('create');

  // Hook
  const { recordingId, isRecording, startRecording, stopRecording } = useAudioRecorder();

  useEffect(() => {
    fetchSurveys();
  }, [])
  
  // Function:  Fetch survey data
  const fetchSurveys = async() => {
    try {
      const res = await surveyService.getAllSurveys();
      setSurveyData(res);
      console.log(res);
    } catch (e) {
      console.log('error fetching surveys', e);
    }
  }

  // Handle create new survey button
  const handleCreate = () => {
    setPopupMode('create');
    setCurrentSurvey(null);
    setShowPopup(true);
  };

  // Handle edit survey button
  const handleEdit = (survey) => {
    setPopupMode('edit');
    setCurrentSurvey(survey);
    setShowPopup(true);
  };

  // Handle save from popup
  const handleSave = (savedSurvey) => {
    if (popupMode === 'create') {
      setSurveyData(prev => [...prev, savedSurvey]);
    } else {
      setSurveyData(prev => 
        prev.map(item => item.id === savedSurvey.id ? savedSurvey : item)
      );
    }
  };

  // Function : Delete Survey
  const deleteSurvey = async (item) => {
    try {
      await surveyService.deleteSurvey(item._id);
      setSurveyData(prev => prev.filter(item => item.id !== item._id));
    } catch (e) {
      console.log('delete survey error:', e);
    }
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Survey Responses</h2>

        {/* Create new survey */}
        <button
          onClick={handleCreate}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Create New Survey
        </button>

        {/* TABLE */}
        {surveyData?.length == 0 ? (
          <h4>No Survey Entry</h4>
        ) : (
          <table className="w-full border border-collapse">
              <thead>
                  <tr className="bg-gray-100">
                      <th className="p-3 text-left border">Question 1</th>
                      <th className="p-3 text-left border">Answer 1</th>
                      <th className="p-3 text-left border">Question 2</th>
                      <th className="p-3 text-left border">Answer 2</th>
                      <th className="p-3 text-left border">Actions</th>
                  </tr>
              </thead>
              <tbody>

              {/* ENTRIES */}
              {surveyData.map((item, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">

                  {/* Question 1 */}
                  <td className="p-3 border">{item.question1}</td>
                  <td className="p-3 border">
                      {recordingId === item.id && isRecording ? (
                        <button
                            onClick={stopRecording}
                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        >
                            Stop Recording
                        </button>
                      ) : (
                        <button
                            onClick={() => startRecording(item.id)}
                            disabled={isRecording}
                            className={`px-3 py-1 rounded ${isRecording ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
                        >
                            Record Answer
                        </button>
                      )}
                      {item.answer && (
                        <button
                            onClick={() => playRecording(item.id)}
                            className="ml-2 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                        >
                            Play
                        </button>
                      )}
                  </td>

                  {/* Question 2 */}
                  <td className="p-3 border">{item.q2}</td>
                  <td className="p-3 border">
                      {recordingId === item.id && isRecording ? (
                        <button
                            onClick={stopRecording}
                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        >
                            Stop Recording
                        </button>
                      ) : (
                        <button
                            onClick={() => startRecording(item.id)}
                            disabled={isRecording}
                            className={`px-3 py-1 rounded ${isRecording ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
                        >
                          Record Answer
                        </button>
                      )}
                      {item.answer && (
                        <button
                            onClick={() => playRecording(item.id)}
                            className="ml-2 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                        >
                            Play
                        </button>
                      )}
                  </td>

                  {/* Action */}
                  <td className="p-3 border">
                    <button
                      onClick={() => handleEdit(item)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteSurvey(item)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
          
        {/* Popup for create/edit */}
        {showPopup && (
          <SurveyPopup
            mode={popupMode}
            survey={currentSurvey}
            onClose={() => setShowPopup(false)}
            onSave={handleSave}
          />
        )}
    </div>
  );
}