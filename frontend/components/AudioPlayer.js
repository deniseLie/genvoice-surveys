// components/AudioPlayer.js
import { useRef, useEffect } from 'react';

const AudioPlayer = ({ audioUrl, onPlay }) => {
    const audioRef = useRef(null);

    useEffect(() => {
        // Clean up audio URL when component unmounts
        return () => {
            if (audioUrl && audioRef.current) {
                URL.revokeObjectURL(audioUrl);
            }
        };
    }, [audioUrl]);

    return (
        <div className="flex items-center">
            <audio 
                ref={audioRef} 
                src={audioUrl} 
                preload="metadata"
            />
            <button
                onClick={() => {
                    if (audioRef.current) {
                        audioRef.current.play();
                        if (onPlay) onPlay();
                    }
                }}
                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 ml-2"
            >
                Play
            </button>
        </div>
    );
};

export default AudioPlayer;