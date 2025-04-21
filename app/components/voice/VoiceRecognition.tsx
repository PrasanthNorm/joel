'use client';

import { useState, useEffect } from 'react';

interface VoiceRecognitionProps {
  onWakeWordDetected: () => void;
}

export default function VoiceRecognition({ onWakeWordDetected }: VoiceRecognitionProps) {
  const [isListening, setIsListening] = useState(false);
  const [animationState, setAnimationState] = useState<'idle' | 'listening' | 'processing'>('idle');

  useEffect(() => {
    let recognition: any;

    const initializeRecognition = () => {
      // @ts-ignore - SpeechRecognition is not in the types
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;

        recognition.onstart = () => {
          setIsListening(true);
          setAnimationState('listening');
        };

        recognition.onresult = (event: any) => {
          const transcript = Array.from(event.results)
            .map((result: any) => result[0])
            .map((result) => result.transcript)
            .join('');

          if (transcript.toLowerCase().includes('hey joel')) {
            setAnimationState('processing');
            onWakeWordDetected();
            setTimeout(() => setAnimationState('listening'), 1000);
          }
        };

        recognition.onerror = (event: any) => {
          console.error('Speech recognition error:', event.error);
          setIsListening(false);
          setAnimationState('idle');
        };

        recognition.onend = () => {
          setIsListening(false);
          setAnimationState('idle');
          // Restart recognition after a brief pause
          setTimeout(() => {
            try {
              recognition.start();
            } catch (error) {
              console.error('Failed to restart recognition:', error);
            }
          }, 1000);
        };
      }
    };

    initializeRecognition();

    return () => {
      if (recognition) {
        recognition.stop();
      }
    };
  }, [onWakeWordDetected]);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="relative">
        <button
          className={`p-4 rounded-full shadow-lg transition-all duration-300
            ${animationState === 'idle' ? 'bg-primary-blue text-white' :
              animationState === 'listening' ? 'bg-primary-mint text-white animate-pulse' :
              'bg-primary-yellow text-white animate-bounce'}`}
        >
          <div className="relative">
            {/* Animation dot */}
            <span 
              className={`absolute -top-1 -right-1 w-3 h-3 rounded-full
                ${animationState === 'idle' ? 'bg-gray-400' :
                  animationState === 'listening' ? 'bg-green-400 animate-ping' :
                  'bg-yellow-400 animate-pulse'}`}
            />
            {/* Microphone icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
              />
            </svg>
          </div>
        </button>

        {/* Status indicator */}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 whitespace-nowrap">
          <span className="px-2 py-1 bg-white rounded-full text-xs font-medium shadow-soft">
            {animationState === 'idle' ? 'Say "Hey Joel"' :
             animationState === 'listening' ? 'Listening...' :
             'Processing...'}
          </span>
        </div>
      </div>
    </div>
  );
}