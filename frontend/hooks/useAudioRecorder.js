import { useState, useRef } from 'react';

export const useAudioRecorder = () => {
    const [recordingId, setRecordingId] = useState(null);
    const [isRecording, setIsRecording] = useState(false);
    const mediaRecorderRef = useRef(null);
    const audioChunksRef = useRef([]);

    const startRecording = async (id) => {
        setRecordingId(id);
        audioChunksRef.current = [];
        
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorderRef.current = new MediaRecorder(stream);
            mediaRecorderRef.current.start();
            setIsRecording(true);

            mediaRecorderRef.current.ondataavailable = (e) => {
                audioChunksRef.current.push(e.data);
            };

            mediaRecorderRef.current.onstop = () => {
                const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
                const audioUrl = URL.createObjectURL(audioBlob);
                stream.getTracks().forEach(track => track.stop());
                
                return audioUrl;
            };
        } catch (err) {
            console.error('Error accessing microphone:', err);
            throw err;
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
            const audioUrl = mediaRecorderRef.current.onstop();
            setRecordingId(null);
            return audioUrl;
        }
        return null;
    };

    // Function : Play recorded audio of sepcific question
    const playRecording = (id) => {
        if (audioRefs.current[id]) {
        audioRefs.current[id].play();
        }
    };

    return {
        recordingId,
        isRecording,
        startRecording,
        stopRecording,
        playRecording
    };
};