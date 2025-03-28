import { useState, useRef, useEffect } from 'react';

export const useAudioRecorder = () => {

    // STATE
    const [recordingId, setRecordingId] = useState(null);
    const [isRecording, setIsRecording] = useState(false);
    const [duration, setDuration] = useState(0);

    //REF
    const mediaRecorderRef = useRef(null);
    const audioChunksRef = useRef([]);
    const streamRef = useRef(null);
    const timerRef = useRef(null);

    // CONST
    const MAX_DURATION = 60;

    useEffect(() => {
        return () => {
            clearInterval(timerRef.current);
        }
    }, [])

    // Function : start recording
    const startRecording = async (id) => {
        setRecordingId(id);
        audioChunksRef.current = [];
        
        try {
            
            // request microphone access
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            streamRef.current = stream;

            // Create MediaRecorder with options for better compatibility
            const options = {
                mimeType: 'audio/webm;codecs=opus',
                audioBitsPerSecond: 128000
            };
            mediaRecorderRef.current = new MediaRecorder(stream, options);
        

            // Collect data chunks
            mediaRecorderRef.current.ondataavailable = (e) => {
                if (e.data.size > 0) {
                    audioChunksRef.current.push(e.data);
                }   
            };

            // Start timer
            setDuration(0);
            timerRef.current = setInterval(() => {
                setDuration(prev => {
                    if (prev >= MAX_DURATION) {
                        stopRecording();
                        return MAX_DURATION;
                    }
                    return prev + 1;
                });
            }, 1000);

            // Recording start - collect data every 100ms
            mediaRecorderRef.current.start();    
            setIsRecording(true);

        } catch (err) {
            console.error('Error accessing microphone:', err);
            throw err;
        } 
    };

    // Function : Stop recording
    const stopRecording = () => {
        
        // if there's no ongoing recording
        if (!mediaRecorderRef.current || !isRecording) {
            return Promise.resolve(null);
        }
        
        return new Promise(resolve => {

            // Setup stop handler
            mediaRecorderRef.current.onstop = () => {
                try {
                    const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm;codecs=opus' });

                    cleanup();
                    console.log('stop recording blob:', audioBlob);
                    resolve(audioBlob);
                } catch (e) {
                    console.log("Error creating blob:", e);
                    cleanup();
                    resolve(null);
                } 
            }

            // Stop recording
            mediaRecorderRef.current.stop();
            setIsRecording(false);
            setRecordingId(null);
        })
    };

    // Function : cleanup
    const cleanup = () => {
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => {
                track.stop();
                track.enabled = false;
            });
            streamRef.current = null;
        }
        mediaRecorderRef.current = null;
        audioChunksRef.current = [];
    }

    return {
        recordingId,
        isRecording,
        startRecording,
        stopRecording,
    };
};