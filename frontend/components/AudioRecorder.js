// import { useState } from 'react';
// import { AudioRecorder } from 'react-audio-voice-recorder';

// export default function AudioRecorderComponent () { 
//     const [audioUrl, setAudioUrl] = useState(null);

//     // Function : Handle recording complete
//     const handleRecordingComplete = async (blob) => {
        
//         // Create a playable URL
//         const audioRecordingUrl = URL.createObjectURL(blob);
//         setAudioUrl(audioRecordingUrl);

//         console.log(audioRecordingUrl);
        
//         return audioRecordingUrl;
//     };

//     return (
//         <div>
//             <AudioRecorder
//                 onRecordingComplete={handleRecordingComplete}
//                 audioTrackConstraints={{
//                     noiseSuppression: true,
//                     echoCancellation: true,
//                     sampleRate: 44100,
//                 }}
//                 showVisualizer={true}
//             />
//             {audioUrl && (
//                 <audio controls src={audioUrl} />
//             )}
//         </div>
//     )
// }