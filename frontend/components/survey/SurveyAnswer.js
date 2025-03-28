import { useState, useRef, useEffect } from 'react';

export default function SurveyAnswer({ voiceResponse }) {
    return (
        <div className="survey-table-actions">
            {voiceResponse ? (
                <div className="flex flex-col items-center gap-2">
                    <AudioPlayer audioBlob={item?.questions[0]?.voiceResponse}/>
                </div>
            ) : (
                <span className="text-gray-400">Not recorded</span>
            )}
        </div>
    );
}