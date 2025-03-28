import { useState, useRef, useEffect } from 'react';
import AudioPlayer from '../audio/AudioPlayer';

export default function SurveyAnswer({ voiceResponse }) {
    console.log("SurveyAnswer voiceResponse", voiceResponse)
    return (
        <div className="survey-table-actions">
            {voiceResponse?.data ? (
                <div className="flex flex-col items-center gap-2">
                    <AudioPlayer voiceResponse={voiceResponse}/>
                </div>
            ) : (
                <span className="text-gray-400">Not recorded</span>
            )}
        </div>
    );
}