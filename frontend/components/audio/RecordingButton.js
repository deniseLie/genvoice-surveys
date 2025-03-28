import { useEffect } from "react";

const RecordingButton = ({ 
    isRecording, 
    onStart, 
    onStop, 
    disabled,
    recordingId,
    currentId,
    duration, 
    maxDuration
}) => {

    // If duration more than max STOP.
    useEffect(() => {
        if (duration >= maxDuration && isRecording && recordingId === currentId) {
          onStop();
        }
      }, [duration, maxDuration, isRecording, recordingId, currentId, onStop]);

    // Ongoing recording
    if (isRecording && recordingId === currentId) {
        return (
            <button
                type="button"
                onClick={onStop}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
                Stop Recording
            </button>
        );
    }

    // Not recording
    return (
        <button
            type="button"
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