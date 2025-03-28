import { useState, useEffect } from 'react';
import { useAudioPlayer } from 'react-use-audio-player';

const AudioPlayer = ({ audioBlob }) => {
  const [audioUrl, setAudioUrl] = useState(null);
  const { load, togglePlayPause, playing } = useAudioPlayer();

  useEffect(() => {
    console.log("audioBlob", audioBlob);
    if (audioBlob) {
      const url = URL.createObjectURL(audioBlob);
      setAudioUrl(url);
      load(url, { format: 'webm' });
    }
  }, [audioBlob, load]);

  return (
    <button
      type="button"
      onClick={togglePlayPause}
      disabled={!audioBlob}
      className={`px-3 py-1 rounded ${
        audioBlob 
          ? 'bg-green-500 text-white hover:bg-green-600' 
          : 'bg-gray-300 cursor-not-allowed'
      }`}
    >
      {playing ? 'Pause' : 'Play'}
    </button>
  );
}

export default AudioPlayer;