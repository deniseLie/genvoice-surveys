import { useAudioPlayer } from 'react-use-audio-player';

const AudioPlayer = ({ audioBlob }) => {
  const { togglePlayPause, playing } = useAudioPlayer({
    src: audioBlob ? URL.createObjectURL(audioBlob) : '',
    format: 'webm'
  });

  return (
    <button
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
};

// import { useState, useRef, useEffect } from 'react';

// const AudioPlayer = ({ audioBlob, onPlay = null }) => {

//     // State
//     const [audioUrl, setAudioUrl] = useState(null);
//     const [isPlaying, setIsPlaying] = useState(false);

//     // Ref
//     const audioRef = useRef(null);
//     const canvasRef = useRef(null);
//     const animationRef = useRef(null);
//     const audioContextRef = useRef(null);
//     const analyserRef = useRef(null);
//     const sourceNodeRef = useRef(null);
    
//     // Create object URL when blob changes
//     useEffect(() => {
//         if (audioBlob) {
//             const url = URL.createObjectURL(audioBlob);
//             setAudioUrl(url);
            
//             // Clean up when component unmounts or blob changes
//             return () => {
//                 URL.revokeObjectURL(url);
//                 disconnectAudioNodes();
//                 if (audioContextRef.current) {
//                     audioContextRef.current.close();
//                     audioContextRef.current = null;
//                 }
//             };
//         } else {
//             setAudioUrl(null);
//         }
//     }, [audioBlob]);

//     // Function : Initialize audio context
//     const setupAudioContext = async() => {
//         if (!audioContextRef.current) {
//             audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
//             analyserRef.current = audioContextRef.current.createAnalyser();
//             analyserRef.current.fftSize = 256;
//         }
//     }

//     // Function : Clean audio node
//     const disconnectAudioNodes = () => {
//         if (sourceNodeRef.current) {
//             sourceNodeRef.current.disconnect();
//             sourceNodeRef.current = null;
//         }
//         cancelAnimationFrame(animationRef.current);
//     }

//     // Function: Handle Playback and visualization
//     const handlePlay = async () => {
//         console.log("AudioPlayer-audioBLob :  ", audioBlob)
//         console.log("audioRef", audioRef.current);
//         console.log("audioUrl", audioUrl);
//         if (!audioRef.current || !audioUrl) return;

//         try {

//             // Initialize audio context and disconnect previous nodes
//             setupAudioContext();
//             disconnectAudioNodes();

//             // Create new source node
//             sourceNodeRef.current = audioContextRef.current.createMediaElementSource(audioRef.current);
//             sourceNodeRef.current.connect(analyserRef.current);
//             analyserRef.current.connect(audioContextRef.current.destination);

//             // Start visualization
//             visualize();
//             setIsPlaying(true);

//             // Reset audio element
//             audioRef.current.src = audioUrl;
//             audioRef.current.volume = 1.0;
//             audioRef.current.muted = false;
//             audioRef.current.load();

//             // Play Audio
//             await audioRef.current.play().catch(e => {
//                 console.error("Playback failed:", e);
//             });
//             if (onPlay) onPlay();

//             // Handle playback end
//             audioRef.current.onended = () => {
//                 setIsPlaying(false);
//                 cancelAnimationFrame(animationRef.current);
//             };
//         } catch (e) {
//             console.log("Playback error: ", e);
//             setIsPlaying(false);
//             disconnectAudioNodes();
//         }
//     }

//     // Audio visualization
//     const visualize = () => {
//         if (!canvasRef.current || !analyserRef.current) return;

//         const canvas = canvasRef.current;
//         const ctx = canvas.getContext('2d');
//         const analyser = analyserRef.current;
//         const bufferLength = analyser.frequencyBinCount;
//         const dataArray = new Uint8Array(bufferLength);

//         const draw = () => {
//             animationRef.current = requestAnimationFrame(draw);
//             analyser.getByteFrequencyData(dataArray);

//             // ctx.fillStyle = 'rgb(200, 200, 200)';
//             // ctx.fillRect(0, 0, canvas.width, canvas.height);
//             ctx.clearRect(0, 0, canvas.width, canvas.height);

//             const barWidth = (canvas.width / bufferLength) * 2.5;
//             let x = 0;

//             for (let i = 0; i < bufferLength; i++) {
//                 const barHeight = dataArray[i] / 2;
//                 ctx.fillStyle = `rgb(50, 150, ${barHeight + 100})`;
//                 ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
//                 x += barWidth + 1;
//             }
//         };

//         draw();
//     };

//     return (
//         <div className="flex flex-col items-center gap-2">
//             <div className="flex items-center gap-2">
//                 <audio 
//                     ref={audioRef} 
//                     src={audioUrl}
//                     preload="auto"
//                 />
//                 <button
//                     type="button"
//                     onClick={handlePlay}
//                     disabled={!audioBlob}
//                     className={`px-3 py-1 rounded ${
//                         audioBlob 
//                             ? 'bg-green-500 text-white hover:bg-green-600' 
//                             : 'bg-gray-300 cursor-not-allowed'
//                     }`}
//                 >
//                     {isPlaying ? 'Playing...' : 'Play'}
//                 </button>
//             </div>

//             {isPlaying && (
//                 <canvas 
//                     ref={canvasRef} 
//                     width="300" 
//                     height="100"
//                     className="border rounded-md bg-gray-100 mt-2"
//                 />
//             )}
//         </div>
//     );
// };

// export default AudioPlayer;