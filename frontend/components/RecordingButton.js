// components/RecordingButton.js
const RecordingButton = ({ 
    isRecording, 
    onStart, 
    onStop, 
    disabled,
    recordingId,
    currentId
}) => {
    if (isRecording && recordingId === currentId) {
        return (
            <button
                onClick={onStop}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
                Stop Recording
            </button>
        );
    }

    return (
        <button
            onClick={onStart}
            disabled={disabled}
            className={`px-3 py-1 rounded ${
                disabled ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
        >
            Record Answer
        </button>
        );
  };
  
  export default RecordingButton;