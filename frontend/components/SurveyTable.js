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
    <div className="survey-table-container">
      <h2 className="survey-table-heading">Survey Responses</h2>

      {/* Create new survey */}
      <button
        onClick={handleCreate}
        className="survey-table-create-btn"
      >
        Create New Survey
      </button>

      {/* TABLE */}
      {surveyData?.length === 0 ? (
        <h4 className="survey-table-no-entry">No Survey Entry</h4>
      ) : (
        <table className="survey-table">
          <thead>
            <tr>
              <th>Question 1</th>
              <th>Answer 1</th>
              <th>Question 2</th>
              <th>Answer 2</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {surveyData.map((item, index) => (
              <tr key={index}>
                <td>{item.question1}</td>
                <td>
                  <div className="survey-table-actions">
                    <button
                      onClick={() => startRecording(item.id)}
                      disabled={isRecording}
                      className="survey-table-record-btn"
                    >
                      {isRecording ? "Stop Recording" : "Record Answer"}
                    </button>
                    {item.answer && (
                      <button
                        onClick={() => playRecording(item.id)}
                        className="survey-table-play-btn"
                      >
                        Play
                      </button>
                    )}
                  </div>
                </td>
                <td>{item.q2}</td>
                <td>
                  <div className="survey-table-actions">
                    <button
                      onClick={() => handleEdit(item)}
                      className="survey-table-edit-btn"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteSurvey(item)}
                      className="survey-table-delete-btn"
                    >
                      Delete
                    </button>
                  </div>
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