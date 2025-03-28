import { useState
  , useEffect } from 'react';

import SurveyPopup from './SurveyFormPopup';
import { surveyService } from '../services/surveyService';
import { useAudioRecorder } from '../hooks/useAudioRecorder';
import SurveyAnswer from './SurveyAnswer';


export default function SurveyTable() {

  // State : surveys
  const [surveyData, setSurveyData] = useState([]);

  // State : Popup (create & edit)
  const [currentSurvey, setCurrentSurvey] = useState(null);
  const [popupMode, setPopupMode] = useState('create');
  const [showPopup, setShowPopup] = useState(false);

  // State : Popup (delete)
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [surveyToDelete, setSurveyToDelete] = useState(null);

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
    fetchSurveys();
  };

  // Function : Confim before deleting
  const confirmDelete = (survey) => {
    setSurveyToDelete(survey);
    setShowConfirmPopup(true);
  }

  // Function : Delete Survey
  const deleteSurvey = async () => {
    if (!surveyToDelete) return;
    try {
      await surveyService.deleteSurvey(surveyToDelete._id);
      fetchSurveys();
    } catch (e) {
      console.log('delete survey error:', e);
    } finally {
      setShowConfirmPopup(false);
      setSurveyToDelete(null);
    }
  }

  return (
    <div className="survey-table-container">
      <h2 className="survey-table-heading">Survey Responses</h2>

      {/* Create new survey */}
      <button onClick={handleCreate} className="survey-table-create-btn">
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

          {/* ENTRIES */}
          <tbody>
            {surveyData.map((item, index) => (
              <tr key={index}>
                <td>{item?.questions[0]?.text}</td>
                <td><SurveyAnswer voiceResponse={item?.questions[0]?.voiceResponse}/></td>
                <td>{item?.questions[1]?.text}</td>
                <td><SurveyAnswer voiceResponse={item?.questions[1]?.voiceResponse}/></td>
                <td>
                  <div className="survey-table-actions">
                    <button onClick={() => handleEdit(item)} className="survey-table-edit-btn">
                      Edit
                    </button>
                    <button onClick={() => confirmDelete(item)} className="survey-table-delete-btn">
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

      {/* Confirmation Popup for Deletion */}
      {showConfirmPopup && (
        <div className='confirm-popup'>
            <div className="confirm-popup-content">
              <h3>Are you sure you want to delete this survey?</h3>
              <div className="confirm-popup-actions">
                <button onClick={() => setShowConfirmPopup(false)} className="cancel-btn">
                  Cancel
                </button>
                <button onClick={deleteSurvey} className="confirm-delete-btn">
                  Delete
                </button>
              </div>
            </div>
        </div>
      )}
    </div>
  );
}