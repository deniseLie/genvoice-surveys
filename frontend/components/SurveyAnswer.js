import { useState, useRef, useEffect } from 'react';

export default function SurveyAnswer({ voiceResponse }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const canvasRef = useRef(null);
    const animationIdRef = useRef(null);
    const audioContextRef = useRef(null);
    const analyserRef = useRef(null);

    // Initialize audio context and cleanup
    useEffect(() => {
        return () => {
            if (animationIdRef.current) {
                cancelAnimationFrame(animationIdRef.current);
            }
            if (audioContextRef.current) {
                audioContextRef.current.close();
            }
        };
    }, []);

    const setupAudioContext = () => {
        if (!audioContextRef.current) {
            audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
            analyserRef.current = audioContextRef.current.createAnalyser();
            analyserRef.current.fftSize = 256;
        }
    };

    const visualizeAudio = () => {
        if (!canvasRef.current || !analyserRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const analyser = analyserRef.current;
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        const draw = () => {
            animationIdRef.current = requestAnimationFrame(draw);
            analyser.getByteFrequencyData(dataArray);

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            const barWidth = (canvas.width / bufferLength) * 2.5;
            let x = 0;

            for (let i = 0; i < bufferLength; i++) {
                const barHeight = dataArray[i] / 2;
                ctx.fillStyle = `rgb(50, ${barHeight + 100}, 150)`;
                ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
                x += barWidth + 1;
            }
        };

        draw();
    };

    const handlePlay = async () => {
        if (!voiceResponse) return;

        try {
            setupAudioContext();

            if (isPlaying) {
                await audioRef.current.pause();
                setIsPlaying(false);
                cancelAnimationFrame(animationIdRef.current);
                return;
            }

            // Create new audio element each time to avoid connection issues
            const audio = new Audio(voiceResponse);
            audioRef.current = audio;

            const source = audioContextRef.current.createMediaElementSource(audio);
            source.connect(analyserRef.current);
            analyserRef.current.connect(audioContextRef.current.destination);

            audio.onended = () => {
                setIsPlaying(false);
                cancelAnimationFrame(animationIdRef.current);
            };

            await audio.play();
            setIsPlaying(true);
            visualizeAudio();

        } catch (error) {
            console.error("Playback error:", error);
            setIsPlaying(false);
        }
    };

    return (
        <div className="survey-table-actions">
            {voiceResponse ? (
                <div className="flex flex-col items-center gap-2">
                    <button
                        onClick={handlePlay}
                        className={`survey-table-play-btn ${
                            isPlaying ? 'bg-red-500' : 'bg-green-500'
                        }`}
                    >
                        {isPlaying ? 'Stop' : 'Play'}
                    </button>
                    
                    {isPlaying && (
                        <canvas 
                            ref={canvasRef} 
                            width={200} 
                            height={80}
                            className="mt-2 border border-gray-300 rounded"
                        />
                    )}
                </div>
            ) : (
                <span className="text-gray-400">Not recorded</span>
            )}
        </div>
    );
}