import React, { useState } from 'react';

// Placeholder for Azure Speech SDK import
// import * as SpeechSDK from 'microsoft-cognitiveservices-speech-sdk';

export default function WarRoom() {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  // Placeholder handler for Azure Speech
  const handleMicClick = async () => {
    setListening(l => !l);
    // TODO: Integrate Azure Speech SDK here
    // Example: Start/stop recognition, update transcript
    if (!listening) {
      setTranscript('Listening... (Azure Speech integration goes here)');
    } else {
      setTranscript('');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 py-12">
      <h1 className="text-4xl font-extrabold mb-6 text-gold">War Room</h1>
      <button
        onClick={handleMicClick}
        className={`bg-gold text-black rounded-full px-6 py-3 font-bold shadow-lg hover:bg-yellow-400 mb-6 ${listening ? 'animate-pulse' : ''}`}
      >
        {listening ? 'Stop Listening' : 'Start War Room (Voice)'}
      </button>
      <div className="w-full max-w-xl bg-gray-900 rounded-lg p-6 mt-4 shadow">
        <h2 className="text-lg font-semibold mb-2">Transcript</h2>
        <div className="text-gray-200 min-h-[60px]">{transcript}</div>
      </div>
      <p className="mt-8 text-gray-400 text-sm">Powered by Azure Speech API (integration required)</p>
    </div>
  );
}
