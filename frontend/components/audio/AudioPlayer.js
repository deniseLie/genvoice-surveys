import { useState, useEffect, useRef } from 'react';
import { useAudioPlayer } from 'react-use-audio-player';

const AudioPlayer = ({ voiceResponse }) => {
  
  // Hook
  const { load, togglePlayPause, playing, stop, ready, error } = useAudioPlayer();

  // States
  const [audioUrl, setAudioUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const resourceTracker = useRef({
    blob: null,
    url: null,
    loadCount: 0
  });

  useEffect(() => {
    // Cleanup function
    return () => {
      stop();
      if (resourceTracker.current) {
        URL.revokeObjectURL(resourceTracker.current.url);
      }
    };
  }, [stop]);

  useEffect(() => {
    if (!voiceResponse?.data) return;

    const currentLoad = ++resourceTracker.current.loadCount;

    // Function : Initailize audio
    const initializeAudio = async () => {
      setIsLoading(true);
      if (!voiceResponse?.data) {
        throw new Error("No audio data received");
      }

      try {

        // Clear previous blob if exists
        if (resourceTracker.current) {
          URL.revokeObjectURL(resourceTracker.current.url);
        }

        // Ensure data is in correct binary format
        const audioData = voiceResponse.data instanceof ArrayBuffer 
          ? new Uint8Array(voiceResponse.data) 
          : voiceResponse.data;

        // Create new resources
        const contentType = voiceResponse.contentType || 'audio/webm';
        const blob = new Blob([audioData], { type: contentType });
        const url = URL.createObjectURL(blob);

        // Track resources
        resourceTracker.current = { 
          blob, 
          url,
          loadCount: currentLoad
        };

        load(url, {
          html5: true,
          format: contentType.split("/")[1] || "webm",
          onload: () => {
            if (resourceTracker.current.loadCount === currentLoad) {
              setIsLoading(false);
            }
          },
          onloaderror: (id, err) => {
            if (resourceTracker.current.loadCount === currentLoad) {
              console.error(`Howler error ${id}:`, err);
              setIsLoading(false);
            }
          }
        });

      } catch (err) {
        console.error('Error initializing audio:', err);
      } finally {
        setIsLoading(false);
      }
    };
    
    initializeAudio();

    return () => {
      // Only cleanup if this specific load is being abandoned
      if (resourceTracker.current.loadCount === currentLoad) {
        stop();
      }
    };
  }, [voiceResponse, load]);
  
  if (error) {
    return <div className="audio-player-error">Playback unavailable</div>;
  }
  
  return (
    <div className="audio-player-container">
      <button
        type="button"
        onClick={togglePlayPause}
        disabled={!voiceResponse || isLoading}
        className={`
          audio-player-button
          ${!voiceResponse || isLoading ? 'audio-player-disabled' : ''}
          ${playing ? 'audio-player-playing' : 'audio-player-ready'}
        `}
      >
        {isLoading ? (
          <>
            <span className="audio-player-spinner"></span>
            Loading
          </>
        ) : playing ? (
          'Pause'
        ) : (
          'Play'
        )}
      </button>
      
      {voiceResponse?.duration && (
        <span className="audio-player-duration">
          {voiceResponse.duration.toFixed(1)}s
        </span>
      )}
    </div>
  );
};

export default AudioPlayer;