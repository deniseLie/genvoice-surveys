import { useState, useRef } from 'react';

export default function SurveyTable() {
  // Sample survey data
  const [surveyData, setSurveyData] = useState([
    { id: 1, q1: 'How would you describe your overall experience?', a1: null, q2: 'How would you describe your overall experience?', answer: null },
    { id: 2, q2: 'What did you like most about our service?', answer: null }
  ]);

  // Refs for audio elements
  const audioRefs = useRef({});
  const [recordingId, setRecordingId] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  // Function : Start Recording
  const startRecording = (id) => {
    setRecordingId(id);
    audioChunksRef.current = [];
    
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        mediaRecorderRef.current = new MediaRecorder(stream);
        mediaRecorderRef.current.start();
        setIsRecording(true);

        mediaRecorderRef.current.ondataavailable = (e) => {
          audioChunksRef.current.push(e.data);
        };

        mediaRecorderRef.current.onstop = () => {
          const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
          const audioUrl = URL.createObjectURL(audioBlob);
          
          setSurveyData(prev => prev.map(item => 
            item.id === id ? { ...item, answer: audioUrl } : item
          ));
          
          stream.getTracks().forEach(track => track.stop());
        };
      })
      .catch(err => {
        console.error('Error accessing microphone:', err);
      });
  };

    const stopRecording = () => {
        if (mediaRecorderRef.current && isRecording) {
        mediaRecorderRef.current.stop();
        setIsRecording(false);
        setRecordingId(null);
        }
    };

    const playRecording = (id) => {
        if (audioRefs.current[id]) {
        audioRefs.current[id].play();
        }
    };

  return (
    <div className="p-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Survey Responses</h2>
        
        <table className="w-full border border-collapse">
            <thead>
                <tr className="bg-gray-100">
                    <th className="p-3 text-left border">Q1</th>
                    <th className="p-3 text-left border">Answer1</th>
                    <th className="p-3 text-left border">Q2</th>
                    <th className="p-3 text-left border">Answer2</th>
                    <th className="p-3 text-left border">Actions</th>
                </tr>
            </thead>
            <tbody>

            {surveyData.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="p-3 border">{item.q1}</td>
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
                <td className="p-3 border">
                  <button
                    onClick={stopRecording}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>

        <div className="mt-4 text-sm text-gray-500">
            {isRecording && (
            <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse mr-2"></div>
                Recording in progress (Question {recordingId})...
            </div>
            )}
        </div>
    </div>
  );
}